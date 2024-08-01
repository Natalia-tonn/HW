function VideoComponent () {
    return (
        <div>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/cvclmAwLLvI"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    //     <div>
    //   <video width="600" controls>
    //     <source src="./public/videos/video.mp4" type="video/mp4" />
    //     Your browser does not support the video tag.
    //   </video>
    // </div>
    )
}
export default VideoComponent