"use client"

import { useState, useRef } from "react"
import axios from "axios"
import Image from "next/image"

interface UploadResponse {
  url: string;
}

const CameraUpload: React.FC = () => {
  const [image, setImage] = useState<string | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [stream, setStream] = useState<MediaStream | null>(null);
  
  const startCamera = async () => {
    try {
      const userStream = await navigator.mediaDevices.getUserMedia({ video: true })
      setStream(userStream);
      if (videoRef.current) {
        videoRef.current.srcObject = userStream;
      }
    } catch (error) {
      console.error("Ошибка доступа к камере", error)
    }
  };

  const capturePhoto = () => {
    if (videoRef.current && canvasRef.current) {
      const context = canvasRef.current.getContext("2d")
      if (context) {
        context.drawImage(videoRef.current, 0, 0, 300, 200)
        const dataUrl = canvasRef.current.toDataURL("image/png")
        setImage(dataUrl)
        stopCamera()
      }
    }
  };

  const stopCamera = () => {
    if (stream) {
      stream.getTracks().forEach(track => track.stop())
      setStream(null)
    }
  };

  const uploadImage = async () => {
    if (!image) {
      console.error("Ошибка: изображение отсутствует")
      return
    }
    try {
      const response = await fetch(image)
      if (!response.ok) {
        throw new Error("Ошибка при получении изображения")
      }
      const blob = await response.blob()
      const formData = new FormData()
      formData.append("file", blob, "selfie.png")
      
      const uploadResponse = await axios.post<UploadResponse>("/api/upload", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      
      console.log("Файл загружен:", uploadResponse.data.url)
    } catch (error) {
      console.error("Ошибка загрузки", error)
    }
  };

  return (
    <div className="flex flex-col items-center gap-4">
      {!image && !stream && (
        <button onClick={startCamera} className="p-2 bg-blue-500 text-white rounded">Открыть камеру</button>
      )}
      {stream && (
        <div>
          <video ref={videoRef} autoPlay playsInline className="w-72 h-48" />
          <button onClick={capturePhoto} className="p-2 bg-green-500 text-white rounded mt-2">Сделать фото</button>
        </div>
      )}
      <canvas ref={canvasRef} className="hidden" width={300} height={200}></canvas>
      {image && (
        <div>
          <Image src={image} alt="Селфи" width={300} height={200} />
          <button onClick={uploadImage} className="p-2 bg-purple-500 text-white rounded mt-2">⬆️ Загрузить фото</button>
        </div>
      )}
    </div>
  )
}

export default CameraUpload