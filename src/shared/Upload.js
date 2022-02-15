import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { actionCreators as imageActions } from "../redux/modules/image";

const ImgUpload = (props) => {
  const dispatch = useDispatch();
  const is_uploading = useSelector((state) => state.image.uploading);
  const fileInput = React.useRef();

  const selectFile = (e) => {
    const reader = new FileReader();
    const file = e.target.files[0];
    console.log()

    reader.readAsDataURL(file);

    reader.onloadend = () => {
      dispatch(imageActions.setPreview(reader.result));
    };
  };

  const uploadFB = () => {
    let image = fileInput.current.files;
    if (!fileInput.current || image.length === 0){
        window.alert("파일을 선택해주세요!");
        return;
    }
    dispatch(imageActions.uploadImageFB(image[0]));
  };

  return (
      <input
        type="file"
        onChange={selectFile}
        ref={fileInput}
        disabled={is_uploading}
        _onClick={uploadFB}
      />
  );
};

export default ImgUpload;
