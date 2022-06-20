// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const data = {
    hero: {
      image: "/images/hero-illustration.svg",
      title: "Let's get fusely together",
      desc: "Outcome-centered product that reduce churn, optimize pricing, and grow your subscription business end-to-end.",
      cta: [
        {
          title: "Get Started",
          url: "/",
        },
      ],
    },
    clients: [
      {
        name: "Client 1",
        img: "/images/client-1.png",
      },
      {
        name: "Client 2",
        img: "/images/client-2.png",
      },
      {
        name: "Client 3",
        img: "/images/client-3.png",
      },
      {
        name: "Client 4",
        img: "/images/client-4.png",
      },
      {
        name: "Client 5",
        img: "/images/client-5.png",
      },
    ],
    examination: {
      image: "/images/detailed-illustration.svg",
      title: "Detailed Examination",
      desc: "A daily dataset to keep you up to date on subscription market trends and what's happening in your vertical.",
      cta: {
        title: "Learn more",
        url: "/",
      },
    },
    creativeSolution: {
      image: "/images/creative-illustration.svg",
      title: "Creative Solutions",
      desc: "Creativity is our second name. We're full of inventive ideas and we're happy to present them to you.",
      cta: {
        title: "Learn more",
        url: "/",
      },
    },
    professionalTeam: {
      image: "/images/professional-illustration.svg",
      title: "Professional Team",
      desc: "Well, obviously, we're professionals. Don't hesitate - get to know us better.",
      cta: {
        title: "Learn more",
        url: "/",
      },
    },
    chooseYourPlan: {
      title: "Choose your plan",
      items: [
        {
          type: "Starter",
          price: "Free",
          per: "/month",
          features: ["Dashboard", "Limited Support", "Forever free"],
          button: {
            title: "Get Started",
            url: "/",
          },
        },
        {
          type: "Premium",
          price: "$29",
          per: "/month",
          features: [
            "Dashboard & Analysis",
            "Premium Support",
            "Tracking Service",
          ],
          button: {
            title: "Get Started",
            url: "/",
          },
        },
        {
          type: "Enterprise",
          price: "$49",
          per: "/month",
          features: [
            "All features in Premium",
            "Realtime overview",
            "Mobile app",
          ],
          button: {
            title: "Get Started",
            url: "/",
          },
        },
      ],
    },
    blog: {
      title: "From our blog",
      button: {
        title: "View all",
        url: "/",
      },
      items: [
        {
          image: "/images/blog-1.jpg",
          title: "What's Fusely?",
          desc: 'A brand new company, created for everyone. This article will help you understand what "fusely" stands for.',
          button: {
            title: "Read more",
            url: "/",
          },
        },
        {
          image: "/images/blog-2.jpg",
          title: "Introducing Fusely Engage",
          desc: "We're happy to announce the Fusely Engage. The first growth automation platform designed for the digital interactions.",
          button: {
            title: "Read more",
            url: "/",
          },
        },
        {
          image: "/images/blog-3.jpg",
          title: "Premium vs Enterprise plan",
          desc: "Let's compare our most popular plans: Premium and Enterprise. This article will help you decide which one will be better for your needs.",
          button: {
            title: "Read more",
            url: "/",
          },
        },
      ],
    },
    cta: {
      title: "Interested in getting fusely?",
      button: {
        title: "Let's talk",
        url: "/",
      },
    },
  };
  res.status(200).json(data);
}
