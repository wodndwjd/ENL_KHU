'use client'; 

import { useState } from "react";
// 💡 { Hero } 형태로 정확히 가져오기만(import) 하고, 외부로 다시 내보내지(export) 않습니다.
import { Hero } from "@/components/home/Hero";
import { ResearchAreas } from "@/components/home/ResearchAreas";
import { FeaturedPublications } from "@/components/home/FeaturedPublications";
import { NewsSection } from "@/components/home/NewsSection";
import { FacultyProfile } from "@/components/home/FacultyProfile";
import { CTASection } from "@/components/home/CTASection";

// 💡 오직 이 페이지 전체를 대표하는 HomePage 함수 딱 하나만 export default 합니다.
export default function HomePage() {
  const [showPopup, setShowPopup] = useState(true);

  return (
    <>
      {/* 공사중 안내 팝업 코드 */}
      {showPopup && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          backgroundColor: 'rgba(0, 0, 0, 0.6)',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          zIndex: 99999,
        }}>
          <div style={{
            backgroundColor: '#ffffff',
            padding: '35px 30px',
            borderRadius: '12px',
            boxShadow: '0 4px 25px rgba(0,0,0,0.25)',
            textAlign: 'center',
            maxWidth: '420px',
            width: '85%',
            fontFamily: 'sans-serif',
          }}>
            <h2 style={{ margin: '0 0 15px 0', color: '#222', fontSize: '24px' }}>🚧 Notice 🚧</h2>
            <p style={{ color: '#111', fontSize: '16px', lineHeight: '1.6', margin: '0 0 12px 0', fontWeight: 'bold' }}>
              ENL webpage is under reconstruction.
            </p>
            <p style={{ color: '#555', fontSize: '14px', lineHeight: '1.6', margin: '0 0 25px 0' }}>
              We will be back with a brand new look soon!<br />
              <span style={{ fontSize: '12px', color: '#999', display: 'inline-block', marginTop: '5px' }}>
                (현재 홈페이지 개편 및 공사 중입니다.)
              </span>
            </p>
            <button 
              onClick={() => setShowPopup(false)}
              style={{
                backgroundColor: '#0070f3',
                color: '#fff',
                border: 'none',
                padding: '12px 30px',
                fontSize: '15px',
                fontWeight: 'bold',
                borderRadius: '6px',
                cursor: 'pointer',
                width: '100%',
                transition: 'background-color 0.2s',
              }}
            >
              Close (닫기)
            </button>
          </div>
        </div>
      )}

      <Hero />
      <ResearchAreas />
      <FeaturedPublications />
      <NewsSection />
      <FacultyProfile />
      <CTASection />
    </>
  );
}
