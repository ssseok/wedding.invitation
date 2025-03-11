import { useEffect, useRef } from 'react';

export default function MapNaver() {
  const mapRef = useRef<HTMLDivElement>(null);

  const lot = 37.5739539541608;
  const lat = 127.085105452975;

  useEffect(() => {
    if (!mapRef.current) return;

    const position = new window.naver.maps.LatLng(lot, lat);

    // 지도 생성
    const map = new window.naver.maps.Map(mapRef.current, {
      center: position,
      zoom: 15,
      // zoomControl: true,
      // zoomControlOptions: {
      //   position: window.naver.maps.Position.TOP_RIGHT,
      // },
    });

    // 마커 생성 (기본 디자인)
    const marker = new window.naver.maps.Marker({
      position: position,
      map: map,
    });

    // 정보창 생성
    const infoWindow = new window.naver.maps.InfoWindow({
      content: `
        <div class="p-4 bg-white  shadow-lg text-center">
          <h3 class="font-bold text-lg">결혼식장</h3>
          <p class="text-gray-600">서울 중랑구 면목로 238 중랑구민회관</p>
        </div>
      `,
      borderColor: 'transparent',
    });

    // 마커 클릭 시 정보창 표시
    window.naver.maps.Event.addListener(marker, 'click', () => {
      if (infoWindow.getMap()) {
        infoWindow.close();
      } else {
        infoWindow.open(map, marker);
      }
    });

    return () => {
      map.destroy();
    };
  }, []);

  return (
    <div className='w-full'>
      <div ref={mapRef} className='w-full h-[400px] shadow-md' />
    </div>
  );
}
