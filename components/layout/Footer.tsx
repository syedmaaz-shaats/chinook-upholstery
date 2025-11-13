import { Phone, MapPin, Calendar, Mail } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Logo from "@/public/logo.svg";

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-200 text-gray-800 pt-10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10">
        
        {/* 1️⃣ Logo & Description */}
        <div>
          <div className="flex items-center space-x-3 mb-4">
            <Image
              src={Logo}
              alt="Chinook Upholstery Logo"
              width={200}   // ⬆️ made bigger
              height={140}
              className="object-contain"
            />
          </div>


          <p className="text-sm leading-relaxed">
            We help both Residential and Commercial clients for all the home furnishing needs.
            We are specialized in Upholstery, Customized furniture design, Window Fashion and Restoration.
          </p>
        </div>

        {/* 2️⃣ Quick Links */}
        <div className="md:ml-10">
          <h3 className="font-semibold mb-3 text-[#002f61]">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><Link href="/upholstery" className="hover:text-blue-600">Upholstery</Link></li>
            <li><Link href="/custom-furniture" className="hover:text-blue-600">Custom Furniture</Link></li>
            <li><Link href="/headboards" className="hover:text-blue-600">Headboards</Link></li>
            <li><Link href="/window-coverings" className="hover:text-blue-600">Window Coverings</Link></li>
            <li><Link href="/about" className="hover:text-blue-600">About us</Link></li>
            <li><Link href="/contact" className="hover:text-blue-600">Contact us</Link></li>
          </ul>
        </div>

        {/* 3️⃣ Contact Information */}
        <div>
          <h3 className="font-semibold mb-3 text-[#002f61]">Contact Us</h3>

          {/* 📞 Phone */}
          <div className="flex items-start space-x-3 text-sm mb-2">
            <Phone className="w-5 h-5 text-gray-700 mt-0.5" />
            <a href="tel:+14032550673" className="hover:text-blue-600">
              (403) 255-0673
            </a>
          </div>

          {/* 📍 Address */}
          <div className="flex items-start space-x-3 text-sm mb-2">
            <MapPin className="w-5 h-5 text-gray-700 mt-0.5" />
            <p>D6 6115 3 St SE, Calgary, AB T2H 1K1</p>
          </div>

          {/* 🗓️ Hours */}
          <div className="flex items-start space-x-3 text-sm mb-2">
            <Calendar className="w-5 h-5 text-gray-700 mt-0.5" />
            <div>
              <p>Monday to Friday: 9:00 am - 5:30 pm</p>
              <p>Saturday: 10:00 am - 5:00 pm</p>
              <p>Closed: Sunday and statutory holidays</p>
            </div>
          </div>

          {/* ✉️ Email */}
          <div className="flex items-start space-x-3 text-sm">
            <Mail className="w-5 h-5 text-gray-700 mt-0.5" />
            <a href="mailto:info@chinookupholstery.com" className="hover:text-blue-600">
              info@chinookupholstery.com
            </a>
          </div>
        </div>


        {/* 4️⃣ Social Media */}
        <div>
          <h3 className="font-semibold mb-3 text-[#002f61]">Connect with us</h3>
          <div className="flex items-center space-x-4">
            <Link href="https://www.facebook.com/profile.php?id=100068161848287#" target="_blank" rel="noopener noreferrer">
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                viewBox="0 0 24 24" className="w-6 h-6 hover:text-blue-600">
                <path d="M22.675 0h-21.35C.6 0 0 .6 0 1.325v21.351C0 23.4.6 24 
                         1.325 24h11.495v-9.294H9.691v-3.622h3.129V8.413
                         c0-3.1 1.893-4.788 4.659-4.788 1.325 0 
                         2.463.099 2.795.143v3.24h-1.918
                         c-1.504 0-1.795.716-1.795 1.763v2.312h3.59l-.467 3.622h-3.123V24h6.116
                         C23.4 24 24 23.4 24 22.676V1.325C24 .6 23.4 0 22.675 0z" />
              </svg>
            </Link>

            <Link href="#" target="_blank" rel="noopener noreferrer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
                fill="currentColor"
                className="w-6 h-6 hover:text-pink-600 transition-colors duration-200"
              >
                <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 
                        114.9S160.5 370.8 224.1 370.8 339 
                        319.5 339 255.9 287.7 141 224.1 
                        141zm0 189.6c-41.2 0-74.7-33.5-74.7-74.7
                        s33.5-74.7 74.7-74.7 74.7 33.5 
                        74.7 74.7-33.5 74.7-74.7 74.7zm146.4-194.3
                        c0 14.9-12.1 27-27 27s-27-12.1-27-27 
                        12.1-27 27-27 27 12.1 27 27zm76.1 
                        27.2c-1.7-35.7-9.9-67.3-36.2-93.5C383.5 
                        39.9 351.9 31.7 316.2 30c-35.7-1.7-142.8-1.7-178.5 
                        0-35.7 1.7-67.3 9.9-93.5 36.2C17.9 92.5 
                        9.7 124.1 8 159.8c-1.7 35.7-1.7 
                        142.8 0 178.5 1.7 35.7 9.9 67.3 36.2 
                        93.5 26.2 26.2 57.8 34.4 93.5 
                        36.2 35.7 1.7 142.8 1.7 178.5 0 
                        35.7-1.7 67.3-9.9 93.5-36.2 
                        26.2-26.2 34.4-57.8 36.2-93.5 
                        1.7-35.7 1.7-142.8 0-178.5zM398.8 
                        388c-7.8 19.7-22.9 34.8-42.6 
                        42.6-29.5 11.7-99.5 9-132.1 
                        9s-102.7 2.6-132.1-9c-19.7-7.8-34.8-22.9-42.6-42.6
                        -11.7-29.5-9-99.5-9-132.1s-2.6-102.7 
                        9-132.1c7.8-19.7 22.9-34.8 42.6-42.6 
                        29.5-11.7 99.5-9 132.1-9s102.7-2.6 
                        132.1 9c19.7 7.8 34.8 22.9 
                        42.6 42.6 11.7 29.5 9 99.5 
                        9 132.1s2.7 102.7-9 132.1z" />
              </svg>
            </Link>

            {/* ✅ WhatsApp */}
            <Link
              href="#" //https://wa.me/14032550673
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Chat on WhatsApp"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6 text-gray-710 hover:text-[#25D366] transition-colors duration-300"
              >
                <path d="M12 0C5.373 0 0 5.373 0 12c0 2.116.55 4.111 1.512 5.845L0 24l6.366-1.667A11.943 11.943 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.77 9.77 0 0 1-4.983-1.367l-.357-.21-3.772.988 1.007-3.668-.228-.378A9.759 9.759 0 0 1 2.182 12C2.182 6.933 6.933 2.182 12 2.182S21.818 6.933 21.818 12 17.067 21.818 12 21.818zm5.372-7.351c-.295-.147-1.74-.859-2.009-.957-.269-.099-.465-.147-.661.147-.197.295-.758.957-.93 1.154-.172.197-.343.221-.638.074-.295-.147-1.248-.46-2.377-1.467a8.91 8.91 0 0 1-1.652-2.044c-.174-.295-.018-.454.13-.601.133-.132.295-.343.442-.515.147-.172.196-.295.294-.49.098-.196.049-.368-.025-.515-.074-.147-.661-1.595-.907-2.183-.239-.574-.482-.497-.661-.507-.171-.009-.368-.011-.564-.011-.196 0-.515.074-.785.368-.27.295-1.031 1.007-1.031 2.457 0 1.45 1.056 2.849 1.203 3.045.147.196 2.08 3.173 5.036 4.452.704.303 1.253.484 1.681.62.706.225 1.35.193 1.86.117.567-.083 1.74-.711 1.986-1.398.245-.687.245-1.277.172-1.398-.074-.122-.27-.196-.565-.343z"/>
              </svg>
            </Link>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="bg-[#002f61] text-white text-center py-3 mt-10 text-sm">
        © {new Date().getFullYear()} Chinook Upholstery. All rights reserved.
      </div>

    </footer>
  );
}
