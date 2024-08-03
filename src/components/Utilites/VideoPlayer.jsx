"use client"; // Mark this file as a client component

import { useState } from "react";
import Youtube from "react-youtube";
import Swal from "sweetalert2";

// Inline styles for SweetAlert2 button
const swalButtonStyles = `
  .swal2-confirm {
    background-color: #1D4ED8 !important; /* Blue background color */
    color: #FFFFFF !important; /* White text color */
    border: none !important; /* Remove border */
    border-radius: 0.375rem !important; /* Rounded corners */
    padding: 0.5rem 1rem !important; /* Padding */
    font-size: 1rem !important; /* Font size */
    font-weight: bold !important; /* Bold text */
    transition: background-color 0.3s ease !important; /* Transition effect */
  }

  .swal2-confirm:hover {
    background-color: #2563EB !important; /* Darker blue on hover */
  }
`;

const VideoPlayer = ({ youtubeId }) => {
    const [isOpen, setIsOpen] = useState(true);

    const handleVideoPlayer = () => {
        setIsOpen(prevState => !prevState);
    };

    const option = {
        width: "300",
        height: "250",
    };

    const handleError = () => {
        // Inject styles for SweetAlert2 buttons
        const styleSheet = document.createElement("style");
        styleSheet.type = "text/css";
        styleSheet.innerText = swalButtonStyles;
        document.head.appendChild(styleSheet);

        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Video is broken, please try another.',
            confirmButtonText: 'Close',
            customClass: {
                confirmButton: 'swal2-confirm', // Apply custom styles
            },
        });
    };

    // Player Component
    const Player = () => (
        <div className="fixed bottom-2 right-2">
            <button
                onClick={handleVideoPlayer}
                className="text-color-accent float-right bg-color-secondary px-3 mb-1"
            >
                X
            </button>
            <Youtube
                videoId={youtubeId}
                onReady={event => event.target.pauseVideo()}
                opts={option}
                onError={handleError}
            />
        </div>
    );

    // Button to Open Trailer
    const ButtonOpenTrailer = () => (
        <button
            onClick={handleVideoPlayer}
            className="rounded fixed bottom-5 right-5 w-32 bg-color-secondary text-white text-xl font-bold hover:bg-blue-600 transition-all shadow-xl"
        >
            Watch Trailer
        </button>
    );

    return isOpen ? <ButtonOpenTrailer /> : <Player />;
};

export default VideoPlayer;
