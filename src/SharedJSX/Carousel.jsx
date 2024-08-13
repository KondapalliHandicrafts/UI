import React, { useCallback, useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import {
  Grid,
  IconButton,
  Slide,
  useMediaQuery,
  useTheme
} from '@mui/material';
import { ExpandMoreIcon } from './SVG';

const styles = {
  wrapper: {
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    overflow: 'hidden'
  },
  prevButton: {
    color: 'text.primary',
    bgcolor: 'transparent',
    border: '1px solid',
    borderColor: 'text.primary',
    borderRadius: '2px',
    '&:disabled': {
      borderColor: 'colors.disabled',
      color: 'colors.disabled'
    }
  },
  dot: {
    height: 10,
    width: 10,
    borderRadius: '50%',
    mx: 0.5,
    cursor: 'pointer'
  },
  activeDot: { bgcolor: 'text.primary' },
  inactiveDot: { bgcolor: 'colors.disabled' },
  prevButtonWrap: { textAlign: 'left' },
  nextButton: {
    color: 'text.primary',
    bgcolor: 'transparent',
    ml: 'calc(100% - 90px)',
    border: '1px solid',
    borderColor: 'text.primary',
    borderRadius: '2px',
    '&:disabled': {
      borderColor: 'colors.disabled',
      color: 'colors.disabled'
    }
  },
  nextButtonWrap: { textAlign: 'right' },
  container: { mb: '1rem', mt: 0, cursor: 'pointer', px: '2rem' }
};

function hideElement(x) {
  // eslint-disable-next-line no-param-reassign
  x.style.display = 'none';
}

const Swiper = props => {
  const {
    containerProps = {
      alignItems: 'center',
      justifyContent: 'center',
      spacing: 2,
      containerStyles: []
    },
    value,
    slideDirection,
    viewSlide
  } = props;
  const { containerStyles, justifyContent, alignItems, spacing } =
    containerProps;

  return (
    <Slide
      direction={slideDirection}
      in={value === viewSlide.key}
      mountOnEnter
      onExit={hideElement}
      timeout={{
        enter: 500,
        exit: 500
      }}
      unmountOnExit
    >
      <Grid
        alignItems={alignItems}
        container
        justifyContent={justifyContent}
        spacing={spacing}
        sx={[
          styles.container,
          ...(Array.isArray(containerStyles)
            ? containerStyles
            : [containerStyles])
        ]}
      >
        {viewSlide.slides.map(slide => (
          <Grid key={slide.key} item xs>
            {slide.content}
          </Grid>
        ))}
      </Grid>
    </Slide>
  );
};

Swiper.propTypes = {
  containerProps: PropTypes.object.isRequired,
  slideDirection: PropTypes.string.isRequired,
  slides: PropTypes.array.isRequired,
  value: PropTypes.number.isRequired,
  viewSlide: PropTypes.object.isRequired
};

const Dot = props => {
  const { slide, index, setSlideDirection, setValue, value } = props;

  const paginationClick = useCallback(() => {
    if (index + 1 < value) setSlideDirection('right');
    else setSlideDirection('left');
    setValue(slide.key);
  }, [index, setSlideDirection, setValue, slide.key, value]);

  return (
    <Grid
      onClick={paginationClick}
      sx={[
        styles.dot,
        value === slide.key && styles.activeDot,
        value !== slide.key && styles.inactiveDot
      ]}
    />
  );
};

Dot.propTypes = {
  index: PropTypes.number.isRequired,
  setSlideDirection: PropTypes.func.isRequired,
  setValue: PropTypes.func.isRequired,
  slide: PropTypes.object.isRequired,
  value: PropTypes.number.isRequired
};

const Carousel = props => {
  const {
    slides,
    slidesPerView = 3,
    isCircular = false,
    isAutoPlay = false,
    isSlideSkip = true,
    isDesktopSwipe = true,
    autoPlayDuration = 5000,
    containerProps
  } = props;
  const { containerStyles, spacing } = containerProps;

  const theme = useTheme();
  const [value, setValue] = useState(1);
  const [viewSlides, setViewSlides] = useState([]);
  const [slideDirection, setSlideDirection] = useState('left');
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const isSmallScreen = useMediaQuery(theme.breakpoints.down('md'));
  const handlePrev = useCallback(() => {
    if ((isCircular || isAutoPlay) && value === viewSlides[0].key)
      setValue(viewSlides.length);
    else setValue(value - 1);
    setSlideDirection('right');
  }, [isAutoPlay, isCircular, value, viewSlides]);

  const handleNext = useCallback(() => {
    if ((isCircular || isAutoPlay) && value === viewSlides.length)
      setValue(viewSlides[0].key);
    else setValue(value + 1);
    setSlideDirection('left');
  }, [isAutoPlay, isCircular, value, viewSlides]);

  const getFinalValue = useCallback(
    (start, move) => {
      if (start > move) {
        if (value !== viewSlides.length) setValue(value + 1);
        else if (isCircular) setValue(1);
      } else if (start < move) {
        if (value !== 1) setValue(value - 1);
        else if (isCircular) setValue(viewSlides.length);
      }
    },
    [isCircular, value, viewSlides.length]
  );

  const handleTouchMove = useCallback(
    e => {
      touchEndX.current = isDesktopSwipe
        ? e.clientX
        : e.changedTouches[0].screenX;
      const start = Math.ceil(touchStartX.current);
      const move = Math.ceil(touchEndX.current);
      if (Math.abs(start - move) > 20)
        getFinalValue(start, move, isCircular || isAutoPlay);
    },
    [isDesktopSwipe, getFinalValue, isCircular, isAutoPlay]
  );

  const handleTouchStart = useCallback(
    e => {
      touchStartX.current = isDesktopSwipe
        ? e.clientX
        : e.changedTouches[0].screenX;
    },
    [isDesktopSwipe]
  );

  const moveOneSlide = useCallback(() => {
    let slidesInView = [];
    const arr = [];
    let count = 1;
    for (let i = 0; i < slides.length; i += 1) {
      slidesInView.push({ ...slides.slice(i, slidesPerView + i) });
      if (i <= slides.length - slidesPerView || slidesPerView === 1) {
        arr.push({ key: count, slides: slidesInView });
        count += 1;
        slidesInView = [];
      }
    }
    return arr;
  }, [slides, slidesPerView]);

  const skipWholeSlide = useCallback(() => {
    let slidesInView = [];
    const arr = [];
    let count = 1;
    const isDivisible = slides.length % slidesPerView;
    const quo = Math.floor(slides.length / slidesPerView);
    for (let i = 0; i < quo * slidesPerView; i += slidesPerView) {
      slidesInView.push(...slides.slice(i, slidesPerView + i));
      arr.push({ key: count, slides: slidesInView });
      count += 1;
      slidesInView = [];
    }
    if (isDivisible) {
      slidesInView.push(
        ...slides.slice(slides.length - slidesPerView, slides.length)
      );
    }
    return arr;
  }, [slides, slidesPerView]);

  useEffect(() => {
    if (slidesPerView) {
      let arr;
      if (isSlideSkip) arr = skipWholeSlide();
      else arr = moveOneSlide();
      setViewSlides(arr);
    }
    const start = isDesktopSwipe ? 'mousedown' : 'touchstart';
    const end = isDesktopSwipe ? 'mouseup' : 'touchend';
    const swipeEle = document.getElementById('swiper');
    swipeEle.addEventListener(start, handleTouchStart);
    swipeEle.addEventListener(end, handleTouchMove);
    return () => {
      swipeEle.removeEventListener(start, handleTouchStart);
      swipeEle.removeEventListener(end, handleTouchMove);
    };
  }, [
    isDesktopSwipe,
    handleTouchMove,
    handleTouchStart,
    moveOneSlide,
    skipWholeSlide,
    isSlideSkip,
    slidesPerView
  ]);

  useEffect(() => {
    let ref;
    if (isAutoPlay) ref = setInterval(() => handleNext(), autoPlayDuration);
    return () => {
      clearInterval(ref);
    };
  }, [isAutoPlay, autoPlayDuration, handleNext]);

  return (
    <Grid id="swiper" sx={styles.wrapper}>
      {viewSlides.map(viewSlide => (
        <Swiper
          key={viewSlide.key}
          slideDirection={slideDirection}
          value={value}
          viewSlide={viewSlide}
          {...props}
        />
      ))}
      {viewSlides.length > 1 && (
        <Grid
          alignItems="center"
          container
          justifyContent="center"
          spacing={spacing}
          sx={[
            { px: '2rem' },
            ...(Array.isArray(containerStyles)
              ? containerStyles
              : [containerStyles])
          ]}
        >
          {!isSmallScreen && (
            <Grid item sx={styles.prevButtonWrap} xs={1}>
              <IconButton
                disabled={
                  !(isCircular || isAutoPlay) && value === viewSlides[0].key
                }
                onClick={handlePrev}
                sx={styles.prevButton}
              >
                <ExpandMoreIcon direction="left" />
              </IconButton>
            </Grid>
          )}
          <Grid
            alignItems="center"
            container
            item
            justifyContent="center"
            xs={10}
          >
            {viewSlides.map((slide, index) => (
              <Dot
                key={slide.key.toString()}
                index={index}
                setSlideDirection={setSlideDirection}
                setValue={setValue}
                slide={slide}
                value={value}
              />
            ))}
          </Grid>
          {!isSmallScreen && (
            <Grid item sx={styles.nextButtonWrap} xs={1}>
              <IconButton
                disabled={
                  !(isCircular || isAutoPlay) &&
                  value === viewSlides[viewSlides.length - 1].key
                }
                onClick={handleNext}
                sx={styles.nextButton}
              >
                <ExpandMoreIcon direction="right" />
              </IconButton>
            </Grid>
          )}
        </Grid>
      )}
    </Grid>
  );
};

Carousel.propTypes = {
  autoPlayDuration: PropTypes.number,
  containerProps: PropTypes.object,
  isAutoPlay: PropTypes.bool,
  isCircular: PropTypes.bool,
  isDesktopSwipe: PropTypes.bool,
  isSlideSkip: PropTypes.bool,
  slides: PropTypes.array.isRequired,
  slidesPerView: PropTypes.number.isRequired
};

export default Carousel;
