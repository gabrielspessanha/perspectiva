import Image from "next/image";
import styles from "./styles.module.scss";
const StudentVideo = () => {
  const videos = [
    {
      src: "https://www.youtube.com/embed/1MyGSjBStOw",
      id: 1,
    },
    {
      src: "https://www.youtube.com/embed/tm7TIRXauy8",
      id: 2,
    },
    {
      src: "https://www.youtube.com/embed/Xcrl-4nr_aI",
      id: 3,
    },
    {
      src: "https://www.youtube.com/embed/EOJbEkoF3BM",
      id: 4,
    },
  ];

  return (
    <div className={styles.content}>
      <p>
        Veja um Pouco do que os Alunos Acham de Estudar no
        <strong> Perspectiva </strong>
      </p>
      <div className={styles.videosContainer}>
        {videos.map((video) => (
          <div key={video.id} className={styles.videoContent}>
            <iframe
              width="340"
              height="200"
              src={video.src}
              title="."
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StudentVideo;
