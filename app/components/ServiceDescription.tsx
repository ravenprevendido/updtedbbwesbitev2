// components/ServiceDetail.tsx
import React, { useState, useRef, use, useEffect } from 'react';
import { FaArrowCircleRight, FaFacebook } from 'react-icons/fa';


type Props = {
  image: string;
  title: string;
  description: string;
  features: string[];
  relatedImages: { src: string, label: string }[];
  onRelatedImageClick: (image: string, label: string) => void
};

type Contact = {
    name: string
    email: string;
}

const ServiceDescription: React.FC<Props> = ({ image, title, description, features, relatedImages }) => {
  const [selectedImage, setSelectedImage] = useState(image);
  const [selectedTitle, setSelectedTitle] = useState(title);
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('')
  const [formStep, setFormStep] = useState<'contact' | 'otp' | 'inquiry' | 'success'>('contact');
  const [otp, setOtp] = useState('');
  const [productName, setProductName] = useState('')
  const [contactName, setContactName] = useState('');
  const [contactPhone, setContactPhone] = useState('')
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedContact, setSelectedContact] = useState<Contact | null>(null)
  
 
  useEffect(() => {
    setSelectedImage(image);
    setSelectedTitle(title);
  }, [image, title])


  const handleImageClick = (newImage: string, label: string) => {
    setSelectedImage(newImage);
    setSelectedTitle(label);
  };


  const scrollRef = useRef<HTMLDivElement>(null);
  let isDown = false;
  let startX: number;
  let scrollLeft: number;


  const handleMouseDown = (e: React.MouseEvent) => {
    if (!scrollRef.current) return;
    isDown = true;
    scrollRef.current.classList.add('cursor-grabbing');
    startX = e.pageX - scrollRef.current.offsetLeft;
    scrollLeft = scrollRef.current.scrollLeft;
  };
  const handleMouseLeave = () => {
    isDown = false;
    scrollRef.current?.classList.remove('cursor-grabbing');
  };

  const handleMouseUp = () => {
    isDown = false;
    scrollRef.current?.classList.remove('cursor-grabbing');
  };
  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDown || !scrollRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 2; // scroll-fastness factor
    scrollRef.current.scrollLeft = scrollLeft - walk;
  };
  const handleContactSelect = (contact: Contact) => {
    setSelectedContact(contact)
  }





  
  const openModal = () => {
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };
  return (
  <div className="max-w-4xl  w-full max-h-[100vh]  from-neutral-500 via-neutral-300 to-neutral-300  rounded">
    <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
  {/* Left: Image */}
  <div className="w-full md:w-1/2 flex justify-center relative">
  
    <img
      src={selectedImage} // Replace with your new image
      alt={selectedTitle}  // Update this if necessary
      className="w-[250px] h-[250px] object-contain" // Maintain responsiveness
    />
  </div>

  {/* Right: Content */}
  <div className="w-full md:w-1/2 text-center md:text-left space-y-2">
    <h2 className="text-3xl md:text-4xl font-bold w-full text-center text-black">
      {selectedTitle}  {/* Replace with the new title */}
    </h2>
    <p className="text-gray-700 text-sm">
      {description}  {/* Update with the new description */}
    </p>
    <p className="text-pink-600 font-medium text-sm">Key Features</p>
    <ul className="text-left text-sm font-semibold text-gray-600">
      {features.map((feature, index) => (
        <li key={index}>{feature}</li>  
      ))}
    </ul>
    <button
      onClick={openModal}
      className="mt-4 px-6 py-2 bg-pink-500 text-white rounded-2xl hover:bg-transparent hover:text-black hover:border border-pink-500">
      Inquire Now
    </button>
  </div>
</div>

{/* Image Slider */}
<p className="text-black font-regular mt-6 text-center py-2 mb-2 md:mb-4 md:py-2">
  You might want also like this
</p>

<div
  ref={scrollRef}
  className="w-full bg-black p-4 rounded-lg mt-4 overflow-x-auto scrollbar-hide cursor-grab"
  onMouseDown={handleMouseDown}
  onMouseLeave={handleMouseLeave}
  onMouseUp={handleMouseUp}
  onMouseMove={handleMouseMove}
>
  <div className="flex gap-4 w-max px-2">
    {relatedImages.map((item, index) => (
      <div
        key={index}
        className="relative group w-40 h-40 bg-gradient-to-br from-neutral-700 to-neutral-500 rounded-lg overflow-hidden flex items-center justify-center"
      >
        <img
          key={index}
          src={item.src}
          alt={item.label}
          onClick={() => handleImageClick(item.src, item.label)}
          className="w-40 h-auto object-contain rounded shadow cursor-pointer"
        />
        <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-70 text-white text-center text-xs py-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          {item.label}
        </div>
      </div>
    ))}
  </div>
</div>

      {/* Modal for "Inquire Now" */}
{isModalOpen && (
  <div onClick={closeModal} className="fixed inset-0 z-50 bg-opacity-0 flex justify-center items-center  py-6 px-4">
    <div onClick={(e) => e.stopPropagation()} className="bg-[#1a1a1a] text-white p-6 md:p-8 rounded-lg w-full max-w-6xl max-h-[100vh] overflow-y-auto  flex flex-col md:flex-row gap-8">
      {/* Left: Product Details */}
      <div className="w-full md:w-1/2 border-pink  p-4  rounded-md bg-[#262626] flex flex-col ">
        <div className="w-full flex justify-center">

          <img
            src={selectedImage}
            alt={title}
            className="max-w-xs h-auto object-contain"
          />
        </div>
        <h2 className="mt-4 text-xl text-center font-bold">{selectedTitle}</h2>
        <p className="text-sm text-center text-gray-400 mt-2">{description}</p>
        <p className="text-pink-400 font-medium text-sm text-center mt-4">Key Features</p>
        <ul className="text-left text-sm  pl-5 text-gray-300 mt-2">
          {features.map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
        </ul>
      </div>
      {/* Right: Contact Form */}
      <div className="w-full md:w-1/2 flex flex-col gap-4  p-4">
        <h3 className="text-center font-semibold text-gray-200 mb-4">
          {formStep === 'contact' && 'Fill Out this form'}
          {formStep === 'otp' && 'Enter OTP sent to your email'}
          {formStep === 'inquiry' && 'Send Product Inquiry'}
          {formStep === 'success' && '✅ Inquiry Sent!'}
        </h3>
       
      <div className="space-y-6">
        {formStep === 'contact' && (
          <>
            <div>
              <label className="text-sm text-gray-400">Name</label>
              <input
                type="text"
                className="w-full p-2 rounded-md bg-[#333] border border-gray-600 text-white"
                placeholder="Enter your name"
                value={contactName}
                onChange={(e) => setContactName(e.target.value)}
              />
            </div>
            <div>
              <label className="text-sm text-gray-400">Contact</label>
              <input
                type="text"
                className="w-full p-2 rounded-md bg-[#333] border border-gray-600 text-white"
                placeholder="Contact person"
                value={contactPhone}
                onChange={(e) => setContactPhone(e.target.value)}
              />
            </div>
            <div>
              <label className="text-sm text-gray-400">Email</label>
              <input
                type="email"
                className="w-full p-2 rounded-md bg-[#333] border border-gray-600 text-white"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </>
        )}

        {formStep === 'otp' && (
          <div>
            <label className="text-sm text-gray-400">OTP Code</label>
            <input
              type="text"
              className="w-full p-2 rounded-md bg-[#333] border border-gray-600 text-white"
              placeholder="Enter the OTP"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
            />
          </div>
        )}

        {formStep === 'inquiry' && (
          <>
            <div>
              <label className="text-sm text-gray-400">Product Name</label>
              <input
                type="text"
                className="w-full p-2 rounded-md bg-[#333] border border-gray-600 text-white"
                placeholder="Product you're inquiring about"
                value={productName}
                onChange={(e) => setProductName(e.target.value)}
              />
            </div>
            <div>
              <label className="text-sm text-gray-400">Message</label>
              <textarea
                className="w-full p-2 rounded-md bg-[#333] border border-gray-600 text-white"
                rows={4}
                placeholder="Your message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              ></textarea>
            </div>
          </>
        )}

        {formStep === 'success' && (
          <div className="flex justify-center">
            <div className="text-green-400 text-5xl animate-ping">✔</div>
          </div>
        )}


          {/* Arrow Button */}
         {/* Arrow Button */}
        <div className="flex justify-end mt-2">
          <button
            onClick={async () => {
              try {
                let res, data;

                // Step 1: Contact - Send OTP Email
                if (formStep === 'contact') {
                  res = await fetch('https://updatedbbwebsites.vercel.app/api/email-verification', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ name: contactName, contact: contactPhone, email }),
                  });

                  if (!res.ok) throw new Error('Failed to send OTP');
                  data = await res.json();

                  if (data.success) {
                    setFormStep('otp');
                  } else {
                    alert(data.message || 'Failed to send OTP');
                  }
                }

                // Step 2: OTP Verification
                else if (formStep === 'otp') {
                  res = await fetch('https://updatedbbwebsites.vercel.app/api/verify-otp', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ email, otp }),
                  });

                  if (!res.ok) throw new Error('Failed to verify OTP');
                  data = await res.json();

                  if (data.success) {
                    setFormStep('inquiry');
                  } else {
                    alert(data.message || 'OTP verification failed');
                  }
                }

                // Step 3: Inquiry Submission
                else if (formStep === 'inquiry') {
                  res = await fetch('https://updatedbbwebsites.vercel.app/api/product-inquiry', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ email, productName, message }),
                  });

                  if (!res.ok) throw new Error('Failed to send inquiry');
                  data = await res.json();

                  if (data.success) {
                    setFormStep('success');
                    setTimeout(() => {
                      setContactName('');
                      setContactPhone('');
                      setEmail('');
                      setOtp('');
                      setProductName('');
                      setMessage('');
                      setFormStep('contact');
                    }, 3000);
                  } else {
                    alert(data.message || 'Failed to send inquiry');
                  }
                }
              } catch (error: any) {
                alert(error.message || 'Something went wrong');
              }
            }}
            className="bg-pink-500 hover:bg-pink-600 text-white text-xl px-4 py-2 rounded-full"
            aria-label="Next step"
          >
            <FaArrowCircleRight />
          </button>
        </div>

        </div>
        {/* Other ways to contact */}
        <div className="mt-2 text-center text-sm text-gray-400">other ways to contact</div>
       <div className="flex justify-between text-xs text-gray-500 mt-4 px-2 md:px-4">
        <div className="space-y-2 text-left">
          <p>+63 917 700 8364</p>
          <p className="flex items-center gap-1">
            <a href="https://facebook.com/burnboxprinting" className="flex items-center gap-1">
               <FaFacebook />burnboxprinting
            </a>
          </p>
        </div>
        <div className="space-y-2 text-right">
          <p>+63 977 247 3179</p>
          <p><a href="https://burnboxprinting.com">burnboxprinting.com</a></p>
        </div>
      </div>
      </div>
      {/* Close Button (top-right) */}
      <button
        onClick={closeModal}
        className="absolute top-4 right-4 text-white font-bold text-xl"
      >
      </button>
    </div>
  </div>
)}

    </div>
  ) ;
};

export default ServiceDescription;

