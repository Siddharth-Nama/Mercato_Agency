"use client";

import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { AppleCardsCarouselDemo } from "@/components/AppleCardsCarouselDemo";
import { AppleCardsCarouselDemo2 } from "@/components/AppleCardsCarouselDemo2";
import { AppleCardsCarouselDemo3 } from "@/components/AppleCardsCarouselDemo3";
import { AppleCardsCarouselDemo4 } from "@/components/AppleCardsCarouselDemo4";
import { AppleCardsCarouselDemo5 } from "@/components/AppleCardsCarouselDemo5";
import { AppleCardsCarouselDemo6 } from "@/components/AppleCardsCarouselDemo6";
import { AppleCardsCarouselDemo7 } from "@/components/AppleCardsCarouselDemo7";
import { AppleCardsCarouselDemo8 } from "@/components/AppleCardsCarouselDemo8";
import { AppleCardsCarouselDemo9 } from "@/components/AppleCardsCarouselDemo9";
import { AppleCardsCarouselDemo10 } from "@/components/AppleCardsCarouselDemo10";


import { zodResolver } from "@hookform/resolvers/zod";

import { useForm } from "react-hook-form";

import * as z from "zod";

import { Checkbox } from "@/components/ui/checkbox";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { Button } from "@/components/ui/button";

import {
  form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import { Input } from "@/components/ui/input";

import { useToast } from "@/components/ui/use-toast";

import { Textarea } from "@/components/ui/textarea";
import { PiCheckLight, PiSmiley } from "react-icons/pi";
import Navbar from "@/components/navbar";


export default function ContactForm() {
  
  

  return (
    <div className=" w-full   md:items-center md:justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] ">
      <Navbar
        scrollToSEO={() => {}}
        scrollToGraphicDesign={() => {}}
        scrollTOThumbnailDesign={() => {}}
        scrollTOContentCreation={() => {}}
        scrollToServices={() => {}}
        scrollTOAdRunning={() => {}}
        scrollToVideoEditing={() => {}}
        scrollToProductPhotography={() => {}}
      />
      <div className="md:flex items-start justify-center">
        <div className="">
          <div className="text-5xl font-medium  w-full md:w-2/3  pb-5 md:text-7xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
            Contact our sales team
          </div>
          <div
            className="
              
              py-4
              text-gray-300
                    "
          >
            Let&apos;s talk about how Mercato Agency can help your team work
            better.
          </div>

          <div className="bg-transparent md:w-11/12  space-y-6 p-4 rounded-2xl my-4 md:flex md:flex-col">
          <AppleCardsCarouselDemo />
          </div>
          <div className="bg-transparent md:w-11/12  space-y-6 p-4 rounded-2xl my-4 md:flex md:flex-col">
          <AppleCardsCarouselDemo2 />
          </div>
          <div className="bg-transparent md:w-11/12  space-y-6 p-4 rounded-2xl my-4 md:flex md:flex-col">
          <AppleCardsCarouselDemo3 />
          </div>
          <div className="bg-transparent md:w-11/12  space-y-6 p-4 rounded-2xl my-4 md:flex md:flex-col">
          <AppleCardsCarouselDemo4 />
          </div>
          <div className="bg-transparent md:w-11/12  space-y-6 p-4 rounded-2xl my-4 md:flex md:flex-col">
          <AppleCardsCarouselDemo5 />
          </div>
          <div className="bg-transparent md:w-11/12  space-y-6 p-4 rounded-2xl my-4 md:flex md:flex-col">
          <AppleCardsCarouselDemo6 />
          </div>
          <div className="bg-transparent md:w-11/12  space-y-6 p-4 rounded-2xl my-4 md:flex md:flex-col">
          <AppleCardsCarouselDemo7 />
          </div>
          <div className="bg-transparent md:w-11/12  space-y-6 p-4 rounded-2xl my-4 md:flex md:flex-col">
          <AppleCardsCarouselDemo8 />
          </div>

        
      </div>
    </div>
    </div>
  
  );
}
