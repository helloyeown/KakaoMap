import React, { useState } from 'react';

const MapSearch = () => {
  const [postcode, setPostcode] = useState('');
  const [address, setAddress] = useState('');
  const [detailAddress, setDetailAddress] = useState('');
  const [extraAddress, setExtraAddress] = useState('');

	const foldDaumPostcode = () => {
    const element_wrap = document.getElementById('wrap');
    element_wrap.style.display = 'none';
  };

  const sample3_execDaumPostcode = () => {
    const element_wrap = document.getElementById('wrap');
    element_wrap.style.display = 'block';
	}
  const handleComplete = (data) => {
    let addr = '';
    let extraAddr = '';

    if (data.userSelectedType === 'R') {
      addr = data.roadAddress;
    } else {
      addr = data.jibunAddress;
    }

    if (data.userSelectedType === 'R' && data.bname !== '' && /[동|로|가]$/g.test(data.bname)) {
      extraAddr += data.bname;
    }

    if (data.buildingName !== '' && data.apartment === 'Y') {
      extraAddr += (extraAddr !== '' ? ', ' + data.buildingName : data.buildingName);
    }

    if (extraAddr !== '') {
      extraAddr = ' (' + extraAddr + ')';
    }

    setPostcode(data.zonecode);
    setAddress(addr);
    setExtraAddress(extraAddr);

  };

  return (
    <div>
      <input type="text" id="sample3_postcode" value={postcode} placeholder="우편번호" />
      <input type="button" onClick={sample3_execDaumPostcode} value="우편번호 찾기" /><br />
      <input type="text" id="sample3_address" value={address} placeholder="주소" /><br />
      <input type="text" id="sample3_detailAddress" value={detailAddress} onChange={(e) => setDetailAddress(e.target.value)} placeholder="상세주소" />
      <input type="text" id="sample3_extraAddress" value={extraAddress} placeholder="참고항목" />

      <div id="wrap" style={{ display: 'none', border: '1px solid', width: '500px', height: '300px', margin: '5px 0', position: 'relative' }}>
        <img src="//t1.daumcdn.net/postcode/resource/images/close.png" id="btnFoldWrap" style={{ cursor: 'pointer', position: 'absolute', right: '0px', top: '-1px', zIndex: '1' }} onClick={foldDaumPostcode} alt="접기 버튼" />
      </div>
    </div>
  );
};

export default MapSearch;