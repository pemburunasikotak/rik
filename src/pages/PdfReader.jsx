const PdfReader = () => {
  const handleDownload = () => {
    // Ganti dengan link file PDF yang sesuai
    const pdfUrl =
      "https://drive.google.com/uc?export=download&id=1UzJf4aeySYVSpXiTbKZdZZzJ-dn6ZpVQ";
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "Detail_Tarif.pdf"; // Nama file saat diunduh
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <div className="flex justify-center items-center h-screen p-1">
      <div className="w-full max-w-4xl bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="text-center p-4 bg-red-100 border-b-2 border-red-300">
          <h1
            className="text-2xl font-semibold text-red-800 cursor-pointer"
            onClick={handleDownload}
          >
            Detail Tarif
          </h1>
        </div>
        <div className="p-2">
          <iframe
            src="https://drive.google.com/file/d/1UzJf4aeySYVSpXiTbKZdZZzJ-dn6ZpVQ/preview"
            width="100%"
            height="800"
            frameborder="0"
            title="PDF preview"
            className="rounded-lg shadow-md"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default PdfReader;
