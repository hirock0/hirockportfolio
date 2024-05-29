module.exports = {
    images: {
      domains: ['res.cloudinary.com'],
    },
    env: {
      NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
      NEXT_PUBLIC_CLOUDINARY_API_KEY: process.env.CLOUDINARY_API_KEY,
      NEXT_PUBLIC_CLOUDINARY_API_SECRET: process.env.CLOUDINARY_API_SECRET,
      NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET:process.env.CLOUDINARY_UPLOAD_PRESET
      
    },
  };