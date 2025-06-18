import React from "react";
import Link from 'next/link';
import { 
    Facebook, 
    Twitter, 
    Linkedin, 
    MessageCircle, 
    Share2,
    Send
  } from 'lucide-react';

  export default function PersonalBox ()
  {
    const socialLinks = [
        { icon: Facebook, color: 'bg-blue-600', href: '#' },
        { icon: Twitter, color: 'bg-black', href: '#' },
        { icon: Linkedin, color: 'bg-blue-700', href: '#' },
        { icon: MessageCircle, color: 'bg-gray-800', href: '#' },
        { icon: Share2, color: 'bg-green-500', href: '#' },
        { icon: Send, color: 'bg-blue-500', href: '#' },
      ];

    


       return(
<div className="bg-white py-8 px-4">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl font-bold text-gray-900 mb-6">Share this article</h1>
        <div className="flex gap-3 mb-8">
        {socialLinks.map((social, index) => (
          <Link
            key={index}
            href={social.href}
            className={`${social.color} p-3 rounded text-white hover:opacity-80 transition-opacity`}
          >
            <social.icon size={20} />
          </Link>
        ))}
      </div>

      <div className="border-2 border-dashed border-gray-300 p-8 text-center max-w-2xl mx-auto">
            <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden bg-gradient-to-r from-green-400 to-yellow-400 p-1">
              <div className="w-full h-full rounded-full overflow-hidden">
                <img
                  src="/api/placeholder/96/96"
                  alt="Abhinav"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Abhinav</h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              An educator with over 13 years of experience in language and 
              communication training. Worked with multi national companies like 
              HCL, Barclay's, American Express and many more. Certified from 
              British Council.
            </p>
            <Link
              href="/news/allnews"
              className="inline-block bg-blue-400 text-white px-8 py-3 rounded font-medium hover:bg-blue-500 transition-colors"
            >
              READ ALL NEWS
            </Link>
          </div>
        </div>
        </div>

    )
  }
  
