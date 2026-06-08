'use client'; // 팝업 열고 닫는 스크립트(State) 작동을 위해 맨 위에 필수 추가

import { useState } from "react";
import { Hero } from "@/components/home/Hero";
import { ResearchAreas } from "@/components/home/ResearchAreas";
import { FeaturedPublications } from "@/components/home/FeaturedPublications";
import { NewsSection } from "@/components/home/NewsSection";
import { FacultyProfile } from "@/components/home/FacultyProfile";
import { CTASection } from "@/components/home/CTASection";

export default function HomePage() {
  // 팝업창을 보여줄지 말지 결정하는 상태 변수 (기본값: true = 보임)
  const [showPopup, setShowPopup] = useState(true);

  return (
    <>
      {/* --- 여기부터 공사중 안내 팝업 코드 --- */}
      {showPopup && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          backgroundColor: 'rgba(0, 0, 0, 0.6)', // 배경을 어둡게 처리
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          zIndex: 99999, // 사이트 내의 그 어떤 요소보다 무조건 위에 뜨도록 설정
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
              onClick={() => setShowPopup(false)} // 버튼 클릭 시 팝업 닫힘
              style={{
                backgroundColor: '#0070f3', // 파란색 버튼 (원하는 색상 코드로 변경 가능)
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
      {/* --- 여기까지 공사중 안내 팝업 코드 --- */}

      {/* 기존에 있던 원래 홈페이지 컴포넌트들 */}
      <Hero />
      <ResearchAreas />
      <FeaturedPublications />
      <NewsSection />
      <FacultyProfile />
      <CTASection />
    </>
  );
}