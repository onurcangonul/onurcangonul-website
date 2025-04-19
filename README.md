
# Personal Portfolio App

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).  
It is built using **React 19**, **Next.js 15**, **Tailwind CSS**, and **shadcn/ui**.

The application is a dynamic personal portfolio that allows you to display your personal information, projects, experiences, and resume — all controlled by structured data files.

---

## 🛠️ Tech Stack

- [React 19](https://react.dev)
- [Next.js 15](https://nextjs.org)
- [Tailwind CSS](https://tailwindcss.com)
- [shadcn/ui](https://ui.shadcn.com)

---

## 🚀 Getting Started

First, clone the repository and install dependencies:

```bash
git clone https://github.com/your-username/your-repo-name.git
cd your-repo-name
npm install
```

Then, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The app supports hot reloading — changes will be instantly reflected.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a modern font family by Vercel.

---

## ✨ How to Customize the Portfolio

You can easily tailor this project to your own profile and background by modifying the contents of the `data/` folder:

### 📁 `data/information/informationData.ts`
Update:
- Your full name
- Email address
- GitHub and LinkedIn links
- Resume link (PDF)
- Profile photo name (placed in `/public/images/`)

### 📁 `data/about/aboutData.ts`
Write a short bio and personal description.

### 📁 `data/projects/projectsData.ts`
List your projects here with:
- Title
- Description
- Technologies used
- GitHub/Live links

### 📁 `data/experiences/experiencesData.ts`
Add your work experience, title, date range, and responsibilities.

### 📁 `data/companies/companiesData.ts`
Add any companies or clients you've worked with.

---

## 🖼️ Replace Resume and Photo

- Your resume file (PDF) should be added to the `public/` folder, and its filename set in `informationData.ts`.
- Your profile photo should be placed in `public/images/` using the same name as set in `informationData.ts`.

---

## 🔄 Everything Is Dynamic

The UI automatically reflects the changes made in the data files. You don't need to touch the layout or components unless you're customizing the design.

---

## 🚀 Deploy on Vercel

The easiest way to deploy your personal portfolio is through [Vercel](https://vercel.com):

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)

You can also follow the official [Next.js deployment guide](https://nextjs.org/docs/app/building-your-application/deploying) for more options.

---

## 📄 License

This project is open-source and available under the [MIT License](LICENSE).

---

## 📚 Learn More

To learn more about the technologies used:

- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://react.dev)
- [Tailwind CSS Guide](https://tailwindcss.com/docs)
- [shadcn/ui Components](https://ui.shadcn.com/docs)

Feedback and contributions are always welcome!
