# Digital Portfolio Website - Project Description

## Overview
Create a responsive digital portfolio website for a final-year software development student. The design should closely follow the provided reference image.

---

## General Requirements
- **Color scheme:** Beige (#dcd6c9), light cream, with accents of dark gray/black for text and icons.
- **Typography:** Clean, modern sans-serif font for body text, larger bold font for headings.
- **Layout:** Full-page sections stacked vertically.
- **Interactions:** Hover effects for project cards, clickable icons for social links, modal popup for project details.
- **Device responsiveness:** Desktop first; scale gracefully for tablet and mobile.

---

## Sections & Layout

### Header / Hero Section
- **Left side:** 3D illustrated character of the user.
- **Right side:** User introduction card:
  - Name: **“amirul faris bin roslan”** in bold.
  - Subtitle: *“software development student”*.
  - Paragraph:  
    > Final-year student at Universiti Teknikal Malaysia Melaka (UTeM) who loves building clean, user-friendly digital experiences. I focus on frontend development and enjoy turning ideas into responsive, interactive interfaces. Always curious, always learning, constantly exploring new technologies and looking for new challenges to grow as a developer.
- **Vertical social links** aligned right: LinkedIn, GitHub, Email.
- **Style:** Subtle shadow behind the card, slight 3D effect or layered effect.

---

### Projects Section
- **Section title:** **“PROJECTS”** in large light-gray uppercase text.
- Display **three project cards** in a row (desktop), each card:
  - Placeholder image
  - Project title below the image
  - Slight drop shadow and hover lift effect
- **Interaction:** Clicking on a card opens a modal with:
  - Enlarged project image
  - Project title
  - Description paragraph (Lorem Ipsum placeholder)
  - Links/buttons: **GitHub** and **Demo Video**
  - Close button (X) on top right
- **Modal overlay:** Darkens the background

---

### Involvements Section
- **Section title:** **“INVOLVEMENTS”** in large light-gray uppercase text
- Display **six involvement cards** in a grid (3 columns x 2 rows on desktop):
  - Placeholder image for each card
  - Title below the image
  - Subtle hover effect
- Bottom: **“See More”** button to expand list if needed

---

### Navigation Sidebar
- Minimal vertical sidebar with icons linking to:
  - About me
  - LinkedIn
  - GitHub
  - Contact/Email
- **Fixed** on the right side

---

## Styling Details
- **Background:** Light beige (#dcd6c9)
- **Cards:** Light cream background with subtle shadows, rounded corners (border-radius ~8px)
- **Section headings:** Very large, light gray, uppercase, partially overlapped by content
- **Text:** Dark gray/black for readability
- **Icons:** Circular background, hover color change
- **Modal overlay:** Semi-transparent dark background (#333 with opacity 0.7)

---

## Interactions & Animations
- Hover effects for project/involvement cards (scale up slightly, shadow intensifies)
- Modal popups for projects animate from center (fade + scale)
- Sidebar icons highlight on hover
- Smooth scrolling between sections

---

## Assets & Placeholders
- **3D character:** Placeholder for illustration or optional Lottie animation
- **Project & involvement images:** Use placeholders initially
- **Text:** Use placeholders for project/involvement descriptions
- **Buttons:** Rounded, subtle shadow, hover color effect

---

## Optional Enhancements
- Subtle parallax effect for header 3D illustration
- Responsive mobile menu with hamburger icon
- Use **CSS Grid** for project/involvement cards for responsiveness
