# **App Name**: DomainSale

## Core Features:

- Domain Info Display: Display domain name, description, and price.
- Glassmorphism Card: Implement a Glassmorphism effect for the main content card.
- CTA Button: A button that redirects the user to the contact link to purchase the domain.
- Footer: Footer section with copyright or short info.

## Style Guidelines:

- Primary color: White or light gray for the background.
- Secondary color: Dark gray or black for text.
- Accent: Blue (#3498db) for the CTA button and highlights.
- Use a centered layout for the Hero section.
- Ensure responsive design for desktop and mobile devices.
- Subtle transitions on hover for the CTA button.

## Original User Request:
Bạn là một chuyên gia frontend, thành thạo Next.js, Tailwind CSS và Shadcn UI.

**Yêu cầu:**
Tạo mã nguồn cho một trang landing page **đơn giản**, đẹp mắt theo phong cách **Glassmorphism** để bán tên miền `n8nwork.com`. Trang này cần được xây dựng bằng **Next.js** (sử dụng **App Router**), **Tailwind CSS**, và các component từ **Shadcn UI**.

**Cấu trúc trang đề xuất:**

1.  **Hero Section (Phần chính):**
    * **Tiêu đề lớn, nổi bật:** Ví dụ: "Sở hữu ngay tên miền `[domainName]`"
    * **Mô tả ngắn gọn:** Ví dụ: "Tên miền cao cấp, lý tưởng cho các dự án tự động hóa và workflow."
    * **Hiển thị giá bán rõ ràng:** Ví dụ: `[priceDisplay]`
    * **Nút Call-to-Action (CTA) chính:** Ví dụ: `[ctaButtonText]`, liên kết đến `[contactLink]`
    * **Yêu cầu về Glassmorphism:** Áp dụng hiệu ứng Glassmorphism cho một thẻ (card) chứa các thông tin trên, nổi bật trên nền (có thể là gradient hoặc ảnh nền đơn giản).

2.  **(Tùy chọn) Footer đơn giản:**
    * Bản quyền hoặc một dòng thông tin ngắn.

**Yêu cầu kỹ thuật:**

* Sử dụng Next.js (App Router).
* Sử dụng Tailwind CSS để styling. Tối ưu hóa cho giao diện **responsive** (desktop và mobile).
* Sử dụng các component phù hợp từ **Shadcn UI** (ví dụ: `Button` cho CTA, `Card` cho phần hiển thị chính nếu cần).
* **Quan trọng:** Định nghĩa các **biến/const** sau ở đầu file component chính (ví dụ: `app/page.tsx`) để dễ dàng thay đổi:
    * `domainName = "n8nwork.com"`
    * `headline = "Sở hữu ngay tên miền n8nwork.com"`
    * `description = "Tên miền cao cấp, lý tưởng cho các dự án tự động hóa và workflow."`
    * `priceUSD = 1500` // Giá dạng số để có thể định dạng
    * `priceDisplay = "$1,500 USD"` // Giá hiển thị dạng chuỗi
    * `contactLink = "mailto:your-email@example.com"` // Hoặc link trang liên hệ, trang thanh toán,...
    * `ctaButtonText = "Liên hệ mua ngay"`
* Cung cấp mã nguồn hoàn chỉnh cho file component chính (`app/page.tsx`).
* **(Tùy chọn) Cung cấp hướng dẫn cơ bản** để cài đặt Tailwind CSS và Shadcn UI trong dự án Next.js nếu chưa có.
* Giải thích ngắn gọn cách bạn đã áp dụng **hiệu ứng Glassmorphism** bằng Tailwind CSS.
  