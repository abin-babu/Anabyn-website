import { ImageResponse } from 'next/og';

// Route segment config
export const runtime = 'edge';

// Image metadata
export const alt = 'Anabyn Global Ventures - Premium Indian Textile Exports';
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = 'image/png';

export default async function Image() {
  // Fetch the logo to embed it in the OG image
  // We use the absolute URL for the local asset in the public folder
  const logoData = await fetch(
    new URL('../../../public/images/logo.png', import.meta.url)
  ).then((res) => res.arrayBuffer());

  return new ImageResponse(
    (
      <div
        style={{
          background: '#060A14',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          position: 'relative',
          fontFamily: 'sans-serif',
        }}
      >
        {/* Background Accent */}
        <div 
          style={{
            position: 'absolute',
            top: '-100px',
            right: '-100px',
            width: '400px',
            height: '400px',
            background: 'rgba(201, 168, 76, 0.05)',
            borderRadius: '50%',
            filter: 'blur(100px)',
          }}
        />

        {/* Main Content */}
        <div
          style={{
            flex: 1,
            display: 'flex',
            alignItems: 'center',
            padding: '0 80px',
            marginTop: '-40px',
          }}
        >
          <img
            src={logoData as any}
            width="160"
            height="160"
            style={{
              marginRight: '50px',
              borderRadius: '20px',
            }}
          />
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <div
              style={{
                fontSize: 76,
                fontWeight: 900,
                color: 'white',
                marginBottom: 12,
                letterSpacing: '-0.02em',
              }}
            >
              Anabyn Global Ventures
            </div>
            <div
              style={{
                fontSize: 34,
                fontWeight: 600,
                color: '#C9A84B',
                textTransform: 'uppercase',
                letterSpacing: '0.1em',
              }}
            >
              Premium Textile Exports from India
            </div>
          </div>
        </div>

        {/* Bottom Trust Strip */}
        <div
          style={{
            background: '#1B3A8A',
            height: 110,
            width: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: 26,
            fontWeight: 700,
            color: 'white',
            letterSpacing: '0.05em',
            borderTop: '2px solid rgba(201, 168, 76, 0.3)',
          }}
        >
          50+ Countries | Premium Export Partner | ISO 9001:2015 Certified
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
