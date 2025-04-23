"use client";
import { 
   Box,
   Container,
   Grid, 
   IconButton 
  }   from "@mui/material";
import Link from "next/link";
import Image from "next/image";
import iconFarmmerce from "../../../../public/farmmerce-iconic.svg";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";

const FooterPage = () => {
  return (
    <footer className="bg-gray-800 text-white py-10 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
         
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Image src={iconFarmmerce} alt="Farmmerce Icon" width={40} />
              <h2 className="text-xl font-bold">FARMMERCE</h2>
            </div>
            <p className="text-gray-400 text-sm">
            Providing modern e-commerce solutions for farmers and consumers.
            </p>
          </div>

          
          <div>
            <h3 className="text-lg font-semibold mb-4">Discover</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="hover:underline text-gray-300">
                  Buy & Shell
                </Link>
              </li>
              <li>
                <Link href="/products" className="hover:underline text-gray-300">
                  Merchant
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="hover:underline text-gray-300">
                  Giving Back
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:underline text-gray-300">
                  Help & Support
                </Link>
              </li>
            </ul>
          </div>

         
          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex gap-4">
              <IconButton aria-label="facebook" className="text-white">
                <FacebookIcon />
              </IconButton>
              <IconButton aria-label="twitter" className="text-white">
                <TwitterIcon />
              </IconButton>
              <IconButton aria-label="instagram" className="text-white">
                <InstagramIcon />
              </IconButton>
            </div>
          </div>
        </div>

        <div className="mt-10 text-center text-sm text-inherit-500">
          &copy; {new Date().getFullYear()} Farmmerce. All Right Reserved.
        </div>
      </div>
    </footer>
  );
};

export default FooterPage;
