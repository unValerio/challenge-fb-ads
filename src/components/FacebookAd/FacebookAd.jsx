import './FacebookAd.css'

function FacebookAd({ ad }) {
  return (
    <div className='wrapper'>
      <div className='container'>
        <div>top</div>
        <div>{ad.headline}</div>
        <img className='ad-image' src={ad.image} alt={ad.headline} />
        <div className='ad-content'>
          <div>MAXSPORTINGGOODS.COM</div>
          <div>{ad.headline}</div>
          <div>{ad.description}</div>
        </div>
        <div>buttons</div>
      </div>
    </div>
  );
}

export default FacebookAd;
