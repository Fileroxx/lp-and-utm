import { useRef } from "react";
import Plyr from "plyr-react";
import "plyr-react/plyr.css";

interface VideoPlayerProps {
  url: string;
  type?: "youtube" | "vimeo" | "video";
  controlsColor?: string; 
  progressColor?: string; 
  backgroundColor?: string; 
  rangeColor?: string; 
}

const VideoPlayer = ({
  url,
  type = "youtube",
  controlsColor = "#ffcc00",
  progressColor = "#ffcc00",
  backgroundColor = "rgba(0, 0, 0, 0.6)",
  rangeColor = "#ffcc00",
}: VideoPlayerProps) => {
  const plyrRef = useRef<any>(null);

  return (
    <div
      className="relative max-w-3xl mx-auto rounded-xl overflow-hidden shadow-lg"
      style={{
        "--plyr-control-color": controlsColor,
        "--plyr-progress-color": progressColor,
        "--plyr-controls-bg": backgroundColor,
        "--plyr-range-color": rangeColor,
      } as React.CSSProperties}
    >
      <Plyr
        ref={plyrRef}
        source={{
          type: "video",
          sources: [{ src: url, provider: type === "youtube" || type === "vimeo" ? type : undefined }],
        }}
        options={{
          controls: ["play", "progress", "current-time", "mute", "volume", "fullscreen"],
          autoplay: true,
        }}
      />


      <style>
        {`
          .plyr__controls {
            background-color: var(--plyr-controls-bg) !important;
          }
          
          .plyr__control {
            color: var(--plyr-control-color) !important;
          }
          
          .plyr__progress--played {
            background: var(--plyr-progress-color) !important;
          }
          
          .plyr__time {
            color: var(--plyr-control-color) !important;
          }

          /* Personalização do input[type=range] para a barra de progresso */
          .plyr--full-ui input[type=range] {
            color: var(--plyr-range-color) !important;
            accent-color: var(--plyr-range-color) !important;
          }
        `}
      </style>
    </div>
  );
};

export default VideoPlayer;
