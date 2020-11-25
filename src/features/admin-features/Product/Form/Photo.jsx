import { Form, Input, Modal, Tooltip, Upload, Image, Divider } from "antd";
import { LoadingOutlined, PlusOutlined } from "@ant-design/icons";
import React, { useEffect, useState } from "react";
import { getBase64 } from "../../../../utils/common";
import productAPI from "../api";
import { toast } from "react-toastify";
import Loading from "../../../../components/Loading";

function Photo(props) {
  const { photoForm, product } = props;
  const images = product
    ? product.images.map((img) => ({
        ...img,
        uid: img.fileId,
        previewUr: img.url,
        url: img.thumbnailUrl,
      }))
    : [];

  const avt = product?.avatar || null;

  const defaultValues = {
    avatar: 1,
  };
  const initialValues = product || defaultValues;
  const [fileList, setFileList] = useState(images);
  const [newFileList, setNewFileList] = useState([]);
  const [deleteFileList, setDeleteFileList] = useState([]);
  const [previewVisible, setPreviewVisible] = useState(false);
  const [previewImg, setPreviewImg] = useState(null);
  const [loadedImg, setLoadedImg] = useState(false);
  const [avatar, setAvatar] = useState(avt);
  const [avatarLoading, setAvatarLoading] = useState(false);

  useEffect(() => {
    photoForm.setFieldsValue({
      new: newFileList,
    });
  }, [newFileList, photoForm]);

  useEffect(() => {
    photoForm.setFieldsValue({
      delete: deleteFileList,
    });
  }, [deleteFileList, photoForm]);

  useEffect(() => {
    photoForm.setFieldsValue({
      avatar: avatar?.id || undefined,
    });
  }, [avatar]);

  const uploadAvatar = async (file) => {
    const formData = new FormData();
    formData.append("files", file);
    try {
      setAvatarLoading(true);
      setAvatar(null);
      const resp = await productAPI.uploadAvatar(formData);
      setAvatar(resp);
      toast.success("Upload avatar thành công!");
    } catch (err) {
      console.log(err);
      toast.error(err.message);
    } finally {
      setAvatarLoading(false);
    }
  };

  const handleCancel = () => {
    setLoadedImg(false);
    setPreviewImg(null);
    setPreviewVisible(false);
  };

  const handlePreview = async (file) => {
    if (!file.previewUr && !file.preview) {
      file.preview = await getBase64(file.originFileObj);
    }
    setPreviewImg({
      url: file.previewUr || file.preview,
      title: file.name || file.url.substring(file.url.lastIndexOf("/") + 1),
    });
    setPreviewVisible(true);
  };

  const handleChangeAvatar = (info) => {
    // console.log(info.file);
  };

  const handleChange = ({ fileList }) => {
    setFileList(fileList);
  };

  const handleRemove = (file) => {
    const isNewFile = newFileList.find((e) => e.uid === file.uid);
    if (isNewFile) {
      setNewFileList((newFileList) =>
        newFileList.filter((e) => e.uid !== file.uid)
      );
    } else {
      setDeleteFileList((deleteFileList) => [...deleteFileList, file.id]);
    }
  };

  const beforeUpload = (file) => {
    setNewFileList((newFileList) => [...newFileList, file]);
    return false;
  };

  const beforeUploadAvatar = (file) => {
    uploadAvatar(file);
    return false;
  };

  const onLoadImg = () => {
    setLoadedImg(true);
  };

  // const handleUpload = () => {
  //   handleSavePhoto(newFileList, deleteFileList);
  // };
  const uploadButton = (
    <div>
      {avatarLoading ? <LoadingOutlined /> : <PlusOutlined />}
      <div style={{ marginTop: 8 }}>Upload</div>
    </div>
  );
  return (
    <>
      <Form name="photoForm" form={photoForm} initialValues={initialValues}>
        <Form.Item name="new" noStyle>
          <Input type="hidden" />
        </Form.Item>
        <Form.Item name="delete" noStyle>
          <Input type="hidden" />
        </Form.Item>
        {/* <Form.Item name="avatar" noStyle>
          <Input type="hidden" />
        </Form.Item>
        <h3>Avatar</h3>
        <Form.Item>
          <div className="clearfix">
            <Upload
              name="avatar"
              listType="picture-card"
              className="avatar-uploader"
              showUploadList={false}
              beforeUpload={beforeUploadAvatar}
              onChange={handleChangeAvatar}
            >
              {avatar && avatar.thumbnailUrl ? (
                <img
                  src={avatar.thumbnailUrl}
                  alt="avatar"
                  style={{ width: "100%" }}
                />
              ) : (
                uploadButton
              )}
            </Upload>
          </div>
        </Form.Item>
        <Divider /> */}
        <h3>Hình ảnh</h3>
        <Form.Item>
          <div className="clearfix">
            <Upload
              accept={"image/*"}
              multiple={true}
              listType="picture-card"
              fileList={fileList}
              onPreview={handlePreview}
              onChange={handleChange}
              onRemove={handleRemove}
              beforeUpload={beforeUpload}
            >
              <div>
                <PlusOutlined />
                <div className="ant-upload-text">Thêm mới</div>
              </div>
            </Upload>
          </div>
        </Form.Item>
      </Form>
      {previewImg && (
        <Modal
          visible={previewVisible}
          title={previewImg.title}
          footer={null}
          onCancel={handleCancel}
        >
          <div style={{ minHeight: "200px" }}>
            <img
              alt="example"
              style={{ width: "100%" }}
              src={previewImg.url}
              onLoad={onLoadImg}
            />
          </div>
          {!loadedImg && <Loading />}
        </Modal>
      )}
    </>
  );
}

export default Photo;
