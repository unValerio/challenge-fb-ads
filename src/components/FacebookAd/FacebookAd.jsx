import './FacebookAd.css'

function FacebookAd({ ad }) {
  return (
    <div className='wrapper'>
      <div className='container'>
        <div className='ad-top'>
          <div className='col'>
            <img className='ad-logo' src="https://admockups.com/images/facebook.png" alt="" />
          </div>
          <div className='col'>
            <div className='ad-name'>MaxsSportingGoods.com</div>
            <div className='ad-sponsored'>Sponsored</div>
          </div>
        </div>
        <div className='ad-headline'>{ad.headline}</div>
        <img className='ad-image' src={ad.image} alt={ad.headline} />
        <div className='ad-content'>
          <div className='col left-col'>
            <div className='ad-link'>MAXSSPORTINGGOODS.COM</div>
            <div className='ad-second-headline'>{ad.headline}</div>
            <div className='ad-description'>{ad.description}</div>
          </div>
          <div className="col right-col">
            <div className="ad-call-to-action">
              Download
            </div>
          </div>
        </div>
        <div className='fb-actions'></div>
      </div>
    </div>
  );
}

export default FacebookAd;
