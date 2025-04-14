import {Metadata} from 'next';

import {Button} from '@/components/ui/button';

const domainName = 'n8nwork.com';
const headline = 'Sở hữu ngay tên miền n8nwork.com';
const description = 'Tên miền cao cấp, lý tưởng cho các dự án tự động hóa và workflow.';
const priceUSD = 189; // Giá dạng số để có thể định dạng
const priceDisplay = '$189 USD'; // Giá hiển thị dạng chuỗi
const contactLink = 'mailto:your-email@example.com'; // Hoặc link trang liên hệ, trang thanh toán,...
const ctaButtonText = 'Liên hệ mua ngay';

export const metadata: Metadata = {
  title: 'Powerful Workflow Automation Software & Tools - n8n',
  description:
    "n8n is a beast for automation. self-hosting and low-code make it a dev's dream. if you're not automating yet, you're working too hard. ... It blows my mind.",
  openGraph: {
    title: 'Powerful Workflow Automation Software & Tools - n8n',
  },
};

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-white text-gray-800 dark:bg-gray-900 dark:text-gray-200">
      <main className="flex flex-grow items-center justify-center p-4">
        <div
          className="relative rounded-xl overflow-hidden shadow-lg max-w-md w-full bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-200 dark:border-gray-700"
          style={{
            backgroundColor: 'rgba(255, 255, 255, 0.1)',
          }}
        >
          <div className="p-8">
            <h1 className="text-3xl font-bold text-center mb-4">{headline}</h1>
            <p className="text-md text-center mb-6">{description}</p>
            <div className="text-center text-lg mb-4">
              <span className="font-semibold">Giá:</span> {priceDisplay}
            </div>
            <div className="text-center">
              <Button asChild>
                <a
                  href={contactLink}
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-300"
                >
                  {ctaButtonText}
                </a>
              </Button>
            </div>
          </div>
        </div>
      </main>
      <footer className="text-center p-4 text-sm">
        &copy; {new Date().getFullYear()} All rights reserved.
      </footer>
    </div>
  );
}
