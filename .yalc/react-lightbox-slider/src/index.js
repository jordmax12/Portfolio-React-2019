import React, { useState, useEffect } from 'react';
import Modal from 'react-barebones-modal'
import uuid from 'react-uuid';
import './src/index.css'

const Slider = ({
  ref,
  images: _images,
  modalImages: _modalImages,
  minSlideHeight,
  sliderMaxWidth
}) => {
  const [images, setImages] = useState(_images || []);
  const [modalImages, setModalImages] = useState(_images || []);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [translateValue, setTranslateValue] = useState(0);
  const [currentIndexModal, setCurrentIndexModal] = useState(0);
  const [translateValueModal, setTranslateValueModal] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [sliderWidth, setSliderWidth] = useState(false);

  if (showModal) document.body.style.overflow = "hidden";
  else document.body.style.overflow = "auto";

  useEffect(() => {
    /**
     * Alert if clicked on outside of element
     */
    function handleClickOutside(e) {
      if (showModal && !e.target.closest("#modal-slider")) {
        alert("You clicked outside of me!");
      }
    }

    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const slideWidth = (isModal) => {
    const width = document.querySelector(isModal ? '.modal-slide' : '.slide').clientWidth;
    console.log('loggind width', width);
    return width;
  }

  const goToPrevSlide = (reactClass, isModal) => {
    const _currentIndex = isModal ? currentIndexModal : currentIndex;
    const _images = isModal ? modalImages : images;
    if (_currentIndex === 0) {
      if (isModal) {
        setCurrentIndexModal(_images.length - 1);
        setTranslateValueModal(-(slideWidth() * (_images.length - 1)));
      } else {
        setCurrentIndex(_images.length - 1);
        setTranslateValue(-(slideWidth() * (_images.length - 1)));
      }
      return;
    }
    if (isModal) {
      setCurrentIndexModal(currentIndexModal - 1);
      setTranslateValueModal(translateValueModal - 1 + slideWidth(true));
      setSliderWidth(slideWidth());
    } else {
      setCurrentIndex(currentIndex - 1);
      setTranslateValue(translateValue - 1 + slideWidth());
    }
  }

  const goToNextSlide = (reactClass, isModal) => {
    const _currentIndex = isModal ? currentIndexModal : currentIndex;
    const _images = isModal ? modalImages : images;
    if (_currentIndex === _images.length - 1) {
      if (isModal) {
        setCurrentIndexModal(0);
        setTranslateValueModal(0);
      } else {
        setCurrentIndex(0);
        setTranslateValue(0);
      }
      return;
    }
    if (isModal) {
      setCurrentIndexModal(currentIndexModal + 1);
      const newTranslateValue = translateValueModal + -(slideWidth(true));
      console.log('logging newTranslateValue', newTranslateValue);
      setTranslateValueModal(newTranslateValue);
      setSliderWidth(slideWidth());
    } else {
      setCurrentIndex(currentIndex + 1);
      setTranslateValue(translateValue + -(slideWidth()));
    }
  }

  const Slide = ({ image, index, applyMinHeight, isModal }) => {
    let styles = {
      display: 'block',
      marginLeft: 'auto',
      marginRight: 'auto',
      position: 'relative',
      top: '50%',
      transform: 'translateY(-50%)'
    }

    if (isModal) {
      styles['maxWidth'] = '800px'
    } else if (!isModal && sliderMaxWidth) {
      styles['maxWidth'] = sliderMaxWidth;
    }

    if (applyMinHeight && minSlideHeight) styles['minHeight'] = minSlideHeight;
    return <div key={`slide-${uuid()}`} className={isModal ? 'modal-slide' : 'slide'} style={{ width: '100%', position: 'relative' }}>
      <img className={isModal ? 'modal-slider-image' : 'slider-image'} onClick={index > -1 ? () => handleImageClick(index) : null} src={image} style={styles} />
    </div>
  }


  const LeftArrow = (props) => {
    let classNames = `backArrow arrow`;
    if (!props.isModal) classNames += ` zi998`
    else classNames += ` zi999`
    return (
      <div className={classNames} onClick={props.goToPrevSlide}>
        <i className="fa fa-arrow-left fa-2x" aria-hidden="true"></i>
      </div>
    );
  }


  const RightArrow = (props) => {
    let classNames = `nextArrow arrow`;
    if (!props.isModal) classNames += ` zi998`
    else classNames += ` zi999`
    return (
      <div className={classNames} onClick={props.goToNextSlide}>
        <i className="fa fa-arrow-right fa-2x" aria-hidden="true"></i>
      </div >
    );
  }

  const modalClickHandler = e => {
    const allowList = [
      'arrow',
      'fa-arrow-right',
      'fa-arrow-left',
      'modal-slider-image'
    ]

    const foundClassNames = [];

    allowList.forEach(a => {
      const classNames = e.target.className.split(' ');
      const find = classNames.filter(c => c.indexOf(a) > -1);
      if (find.length > 0) foundClassNames.push(a);
    })
    if (foundClassNames.length === 0) setShowModal(false);
  }

  const handleImageClick = (index = 0) => {
    console.log('here???')
    setShowModal(true);
    setCurrentIndexModal(index);
    const newTranslateValue = index * -(800);

    setTranslateValueModal(newTranslateValue);
    console.log('logging translateValueModal', translateValueModal, 'logging index', index, 'logging newTranslateValue', newTranslateValue)

  }

  return (
    <React.Fragment>
      <Modal
        customClassName={`w80% mawa bgc-t t50 posa ofh`}
        show={showModal}
        childClickHandler={modalClickHandler}
        handleClose={() => setShowModal(false)}>
        <div id="modal-slider" className="modal-slider" style={{ width: `${sliderWidth}px`, display: showModal ? 'block' : 'none' }}>
          <div className="slider-wrapper"
            style={{
              transform: `translateX(${translateValueModal}px)`,
              transition: 'transform ease-out 0.45s'
            }}>
            {
              modalImages.map((image, i) => (
                <Slide applyMinHeight key={`modal-${i}`} image={image} isModal />
              ))
            }
          </div>
          <LeftArrow
            goToPrevSlide={() => goToPrevSlide(null, true)}
            isModal
          />

          <RightArrow
            goToNextSlide={() => goToNextSlide(null, true)}
            isModal
          />
        </div>
      </Modal>
      <div className="slider" style={{ width: showModal ? `${sliderWidth}px` : '800px' }}>
        <div className="slider-wrapper"
          style={{
            transform: `translateX(${translateValue}px)`,
            transition: 'transform ease-out 0.45s'
          }}>
          {
            images.map((image, i) => (
              <Slide index={i} key={i} image={image} />
            ))
          }
        </div>

        <LeftArrow
          goToPrevSlide={goToPrevSlide}
        />

        <RightArrow
          goToNextSlide={goToNextSlide}
        />
      </div>
    </React.Fragment >

  );
}



export default Slider