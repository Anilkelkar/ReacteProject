import React from "react";

const About = () => {
  return (
    <div className="min-h-screen  p-6 flex flex-col items-center">
      {/* Website About Box */}
      <div className=" shadow-lg rounded-lg p-6 w-full max-w-3xl mb-10">
        <h2 className="text-3xl font-bold text-center text-green-700 mb-4">About Our Website</h2>
        <p className="text-gray-700 text-lg leading-relaxed">
          इस वेबसाइट का उद्देश्य किसानों को उनकी फसलों के बारे में जानकारी देना है। हम React और Vite का उपयोग करके एक तेज़ और responsive वेब एप्लिकेशन बना रहे हैं।
          यह प्रोजेक्ट छात्रों और डेवलपर्स को React के स्ट्रक्चर और मॉड्यूलर कोडिंग सिखाने के लिए बनाया गया है।
          इसमें Login/Register, Dashboard, और फसल की जानकारी जैसे सेक्शन शामिल हैं।
        </p>
      </div>

      {/* Fasal Information Box */}
      <div className="bg-[#1a1a21] text-white rounded-lg shadow-md p-6 w-full max-w-3xl">
        <h3 className="text-2xl font-semibold text-yellow-400 mb-4">फसल की जानकारी (Crop Information)</h3>
        <ul className="list-disc pl-6 space-y-2 text-lg">
          <li><strong>गेहूं (Wheat):</strong> मुख्य सर्दी की फसल, जिससे रोटी और आटा बनता है।</li>
          <li><strong>धान (Rice):</strong> मानसून की फसल, एशिया में प्रमुख भोजन।</li>
          <li><strong>गन्ना (Sugarcane):</strong> इससे गुड़, चीनी और इथेनॉल बनता है।</li>
          <li><strong>सरसों (Mustard):</strong> तेल और साग दोनों के लिए उपयोगी।</li>
        </ul>
      </div>
    </div>
  );
};

export default About;
