import React from 'react'
import Container from 'react-bootstrap/esm/Container'

function Award() {
  return (
    <Container>
    <div className='award'>
        <div className='award-winning'>
            <p className='award-winning-p'>Award Winning Creative Agency</p>
            <p className='award-winning-para'>On the other hand, we denounce with righteous indignation and dislike men who are so beguiled. that they cannot foresee the pain and trouble that are bound to ensue</p>
            <a href="" className='award-winning-know'>Know More</a>
        </div>
        <div className='award-detail'>
            <div className='award-detail-icon'>
                <div className='award-detail icon-detail'>
                    <i className="fa fa-desktop" aria-hidden="true"></i>
                    <p className='award-name'>Development</p>
                    <p className='award-name-detail'>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                </div>
                <div className='award-detail icon-detail'>
                    <i class="fa fa-desktop" aria-hidden="true"></i>
                    <p className='award-name'>Development</p>
                    <p className='award-name-detail'>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                </div>
            </div>
            <div className='award-detail-icon'>
                <div className='award-detail icon-detail'>
                    <i class="fa fa-desktop" aria-hidden="true"></i>
                    <p className='award-name'>Development</p>
                    <p className='award-name-detail'>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                </div>
                <div className='award-detail icon-detail'>
                    <i class="fa fa-desktop" aria-hidden="true"></i>
                    <p className='award-name'>Development</p>
                    <p className='award-name-detail'>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                </div>
            </div>
        </div>
    </div>
    </Container>
  )
}

export default Award