import { useEffect } from "react"

const {kakao} = window

const KakaoMap = () => {

	// kakao map
	useEffect(() => {
		const container = document.getElementById('map')	// 지도를 담을 영역의 DOM 레퍼런스

		const options = {
			center: new kakao.maps.LatLng(37.5719342, 126.987372),		// 지도의 중심 좌표
			level: 3
		}

		const map = new kakao.maps.Map(container, options)	// 지도 생성/객체 리턴
		const geocoder = new kakao.maps.services.Geocoder()	// 지오코더

		geocoder.addressSearch('인사동 12길 12', function (result, status) {
			// 정상적으로 검색 완료됐으면
			if(status === kakao.maps.services.Status.OK) {
				var coords = new kakao.maps.LatLng(result[0].y, result[0].x);
  
        // 결과값으로 받은 위치를 마커로 표시
        var marker = new kakao.maps.Marker({
          map: map,
          position: coords
			})

				// 인포윈도우로 장소에 대한 설명을 표시
				var infowindow = new kakao.maps.InfoWindow({
					content: '<div style="width:150px;color:red;text-align:center;padding:6px 0;">검색한 위치</div>'
				});
				infowindow.open(map, marker);
	
				// 지도의 중심을 결과값으로 받은 위치로 이동
				map.setCenter(coords);
			}
		})
	}, [])	// 처음 렌더링 될 때 지도 뿌리기

	// geolocation
	// function geoOkay(position) {
	// 	console.log(position)
	// 	const lat = position.coords.latitude
	// 	const lng = position.coords.longitude
	// 	console.log(lat, lng)
	// }

	// function geoError() {
	// 	alert("geo Error")
	// }

	// navigator.geolocation.getCurrentPosition(geoOkay, geoError)


	return (  
		<div>
			<h1>KakaoMap</h1>
			<div id="map" style={{
				width: '500px',
				height: '500px'
			}}></div>
		</div>
	);
}
 
export default KakaoMap;