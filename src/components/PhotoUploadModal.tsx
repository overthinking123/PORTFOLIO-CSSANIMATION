import React, { useState, useRef, ChangeEvent } from 'react';
import { useProfile } from '../context/ProfileContext';
import { Camera, Upload, X, Check, AlertCircle, RefreshCw, Trash2, Image as ImageIcon } from 'lucide-react';

export const PhotoUploadModal: React.FC = () => {
  const { profile, updateAvatar, resetAvatarToDefault, isUploadModalOpen, closeUploadModal, showToast } = useProfile();
  
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [selectedFileName, setSelectedFileName] = useState<string | null>(null);
  const [fileSizeMb, setFileSizeMb] = useState<string | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  const fileInputRef = useRef<HTMLInputElement>(null);
  const cameraInputRef = useRef<HTMLInputElement>(null);

  if (!isUploadModalOpen) return null;

  const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5MB in bytes
  const ALLOWED_MIME_TYPES = ['image/jpeg', 'image/png', 'image/webp', 'image/gif'];

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    setErrorMessage(null);
    setSuccessMessage(null);
    const file = e.target.files?.[0];
    if (!file) return;

    // Validate MIME Type
    if (!ALLOWED_MIME_TYPES.includes(file.type.toLowerCase())) {
      setErrorMessage('Định dạng tệp không hợp lệ. Vui lòng chọn ảnh JPG, PNG, WEBP hoặc GIF.');
      showToast('Định dạng tệp không hợp lệ. Chỉ chấp nhận ảnh JPG, PNG, WEBP.', 'error');
      return;
    }

    // Validate File Size (<= 5MB)
    if (file.size > MAX_FILE_SIZE) {
      setErrorMessage('Ảnh quá lớn. Vui lòng chọn ảnh có dung lượng dưới 5MB.');
      showToast('Ảnh quá lớn. Vui lòng chọn ảnh có dung lượng dưới 5MB.', 'error');
      return;
    }

    setIsProcessing(true);
    setSelectedFileName(file.name);
    setFileSizeMb((file.size / (1024 * 1024)).toFixed(2));

    const reader = new FileReader();
    reader.onload = (event) => {
      const result = event.target?.result as string;
      setPreviewUrl(result);
      setIsProcessing(false);
    };
    reader.onerror = () => {
      setIsProcessing(false);
      setErrorMessage('Không thể đọc tệp ảnh. Vui lòng thử lại với một ảnh khác.');
      showToast('Không thể đọc tệp ảnh. Vui lòng thử lại.', 'error');
    };
    reader.readAsDataURL(file);
  };

  const handleSaveAvatar = () => {
    if (!previewUrl) return;
    setIsProcessing(true);
    try {
      updateAvatar(previewUrl);
      setSuccessMessage('Đã cập nhật ảnh đại diện thành công trên toàn bộ trang web!');
      setTimeout(() => {
        setIsProcessing(false);
        closeUploadModal();
        setPreviewUrl(null);
        setSelectedFileName(null);
      }, 1000);
    } catch {
      setIsProcessing(false);
      setErrorMessage('Có lỗi xảy ra khi lưu ảnh. Vui lòng thử lại.');
    }
  };

  const handleResetToDefault = () => {
    resetAvatarToDefault();
    setPreviewUrl(null);
    setSelectedFileName(null);
    setErrorMessage(null);
    closeUploadModal();
  };

  const handleClearPreview = () => {
    setPreviewUrl(null);
    setSelectedFileName(null);
    setFileSizeMb(null);
    setErrorMessage(null);
    if (fileInputRef.current) fileInputRef.current.value = '';
    if (cameraInputRef.current) cameraInputRef.current.value = '';
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate__animated animate__fadeIn animate__faster"
      role="dialog"
      aria-modal="true"
      aria-labelledby="avatar-modal-title"
    >
      <div className="relative w-full max-w-lg bg-slate-900 border border-cyan-500/30 rounded-2xl p-6 sm:p-7 shadow-2xl shadow-cyan-950/50 text-slate-100 overflow-hidden">
        {/* Ambient Top Glow */}
        <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-72 h-32 bg-cyan-500/20 blur-3xl pointer-events-none rounded-full" />

        {/* Modal Header */}
        <div className="flex items-center justify-between pb-4 border-b border-slate-800">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
              <Camera className="w-5 h-5" />
            </div>
            <div>
              <h2 id="avatar-modal-title" className="text-lg font-bold text-white tracking-tight">
                Quản lý Ảnh Đại diện Cá nhân
              </h2>
              <p className="text-xs text-slate-400">
                Tải lên và đồng bộ ảnh hồ sơ trên toàn bộ trang E-Portfolio
              </p>
            </div>
          </div>
          <button
            onClick={closeUploadModal}
            className="p-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition-colors"
            aria-label="Đóng cửa sổ"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Hidden File Inputs */}
        <input
          type="file"
          ref={fileInputRef}
          onChange={handleFileChange}
          accept="image/jpeg,image/png,image/webp,image/gif"
          className="hidden"
          id="profile-file-picker"
        />
        <input
          type="file"
          ref={cameraInputRef}
          onChange={handleFileChange}
          accept="image/jpeg,image/png,image/webp"
          capture="user"
          className="hidden"
          id="profile-camera-picker"
        />

        {/* Body Content */}
        <div className="mt-5 space-y-5">
          {/* Status Notifications */}
          {errorMessage && (
            <div className="flex items-start gap-2.5 p-3.5 bg-rose-500/10 border border-rose-500/30 rounded-xl text-xs text-rose-300">
              <AlertCircle className="w-4 h-4 shrink-0 text-rose-400 mt-0.5" />
              <span>{errorMessage}</span>
            </div>
          )}

          {successMessage && (
            <div className="flex items-start gap-2.5 p-3.5 bg-emerald-500/10 border border-emerald-500/30 rounded-xl text-xs text-emerald-300">
              <Check className="w-4 h-4 shrink-0 text-emerald-400 mt-0.5" />
              <span>{successMessage}</span>
            </div>
          )}

          {/* Image Preview Box */}
          <div className="flex flex-col items-center justify-center p-6 bg-slate-950/60 border border-dashed border-slate-800 rounded-2xl relative">
            <div className="relative group">
              <div className="w-36 h-36 sm:w-40 sm:h-40 rounded-2xl overflow-hidden border-2 border-cyan-500/40 shadow-lg shadow-cyan-950/40 bg-slate-900 flex items-center justify-center">
                <img
                  src={previewUrl || profile.avatarUrl}
                  alt={profile.fullName}
                  className="w-full h-full object-cover object-top transition-transform duration-300 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
              </div>

              {previewUrl && (
                <span className="absolute -top-2 -right-2 px-2 py-0.5 bg-cyan-500 text-slate-950 text-[10px] font-bold rounded-full shadow-md uppercase tracking-wider">
                  Xem trước
                </span>
              )}
            </div>

            <div className="mt-3 text-center">
              <p className="text-xs font-semibold text-slate-200">
                {previewUrl ? 'Ảnh đã chọn sẵn sàng để áp dụng' : 'Ảnh đại diện đang hiển thị'}
              </p>
              {selectedFileName && (
                <p className="text-[11px] text-cyan-400 font-mono mt-0.5">
                  {selectedFileName} ({fileSizeMb} MB)
                </p>
              )}
            </div>
          </div>

          {/* Action Triggers */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            <button
              type="button"
              onClick={() => fileInputRef.current?.click()}
              disabled={isProcessing}
              className="flex items-center justify-center gap-2 px-4 py-2.5 bg-slate-800 hover:bg-slate-700 active:scale-95 text-xs font-medium text-white rounded-xl border border-slate-700 transition-all cursor-pointer"
            >
              <Upload className="w-4 h-4 text-cyan-400" />
              <span>{previewUrl ? 'Chọn tệp ảnh khác' : 'Tải ảnh từ máy tính'}</span>
            </button>

            <button
              type="button"
              onClick={() => cameraInputRef.current?.click()}
              disabled={isProcessing}
              className="flex items-center justify-center gap-2 px-4 py-2.5 bg-slate-800/80 hover:bg-slate-700 active:scale-95 text-xs font-medium text-slate-200 rounded-xl border border-slate-700 transition-all cursor-pointer"
            >
              <Camera className="w-4 h-4 text-purple-400" />
              <span>Chụp ảnh từ Camera</span>
            </button>
          </div>

          <div className="text-[11px] text-slate-400 leading-relaxed bg-slate-950/40 p-3 rounded-xl border border-slate-800/60">
            <div className="flex items-center gap-1.5 font-medium text-slate-300 mb-1">
              <ImageIcon className="w-3.5 h-3.5 text-cyan-400" />
              <span>Quy cách tải ảnh tiêu chuẩn:</span>
            </div>
            <ul className="space-y-0.5 text-slate-400 pl-4 list-disc">
              <li>Hỗ trợ định dạng: JPG, PNG, WEBP hoặc GIF</li>
              <li>Dung lượng tối đa: không quá 5MB / ảnh</li>
              <li>Khung hình tự động căn chỉnh tỷ lệ chân dung tối ưu</li>
            </ul>
          </div>
        </div>

        {/* Modal Footer Controls */}
        <div className="mt-6 pt-4 border-t border-slate-800 flex flex-wrap items-center justify-between gap-2.5">
          <div className="flex items-center gap-2">
            {previewUrl && (
              <button
                type="button"
                onClick={handleClearPreview}
                className="flex items-center gap-1.5 px-3 py-2 text-xs text-rose-400 hover:text-rose-300 hover:bg-rose-500/10 rounded-lg transition-colors cursor-pointer"
              >
                <Trash2 className="w-3.5 h-3.5" />
                <span>Hủy ảnh vừa chọn</span>
              </button>
            )}
            <button
              type="button"
              onClick={handleResetToDefault}
              className="flex items-center gap-1.5 px-3 py-2 text-xs text-slate-400 hover:text-slate-200 hover:bg-slate-800 rounded-lg transition-colors cursor-pointer"
              title="Khôi phục ảnh đại diện gốc ban đầu"
            >
              <RefreshCw className="w-3.5 h-3.5" />
              <span>Khôi phục mặc định</span>
            </button>
          </div>

          <div className="flex items-center gap-2 ml-auto">
            <button
              type="button"
              onClick={closeUploadModal}
              className="px-4 py-2 text-xs font-medium text-slate-400 hover:text-white rounded-lg transition-colors cursor-pointer"
            >
              Đóng
            </button>
            <button
              type="button"
              disabled={!previewUrl || isProcessing}
              onClick={handleSaveAvatar}
              className={`flex items-center gap-2 px-5 py-2 rounded-xl text-xs font-semibold shadow-lg transition-all cursor-pointer ${
                previewUrl && !isProcessing
                  ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 hover:brightness-110 active:scale-95 shadow-cyan-500/25'
                  : 'bg-slate-800 text-slate-500 cursor-not-allowed'
              }`}
            >
              {isProcessing ? (
                <>
                  <RefreshCw className="w-3.5 h-3.5 animate-spin" />
                  <span>Đang xử lý...</span>
                </>
              ) : (
                <>
                  <Check className="w-3.5 h-3.5" />
                  <span>Áp dụng ảnh này</span>
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
