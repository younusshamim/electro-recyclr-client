import React from "react";

const ImagePreview = () => {
  return <div></div>;
};

export default ImagePreview;

// {selectedImages?.map((file, index) => {
//     const url = imgFileToUrl(file);
//     return (
//       <SingleImage
//         url={url}
//         key={index}
//         index={index}
//         handleRemove={handleFileRemove}
//       />
//     );
//   })}

//   {selectedImages.length && (
//     <>
//       <Input
//         display="none"
//         type="file"
//         id="addMoreImage"
//         name="addMoreImage"
//       />
//       <VStack
//         w="80px"
//         h="80px"
//         borderRadius="md"
//         bg="gray.50"
//         p="10px"
//         htmlFor="addMoreImage"
//         as="label"
//         cursor="pointer"
//         justifyContent="center"
//       >
//         <BiImageAdd fontSize="30px" />
//       </VStack>
//     </>
//   )}
