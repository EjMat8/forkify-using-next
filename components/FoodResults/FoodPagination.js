import { Flex, Spacer, Button, Box } from "@chakra-ui/react";
import FoodContext from "../../store/food-context";
import { IoArrowForward, IoArrowBack } from "react-icons/io5";
import { useContext, Fragment } from "react";
export default function FoodPagination() {
  const foodCtx = useContext(FoodContext);
  const totalPages =
    Math.ceil(foodCtx.search.results / foodCtx.search.resPerPage) || 1;

  const curPage = foodCtx.search.page;

  const onePageBool = curPage === totalPages && totalPages === 1;
  const firstPageBool = curPage === 1 && totalPages > 1;
  const lastPageBool = curPage === totalPages && totalPages > 1;

  return (
    <Box w="100%" pos="absolute" bottom={12}>
      <Flex px={12}>
        {!onePageBool && (
          <Fragment>
            {!firstPageBool && (
              <Button
                borderRadius="3xl"
                color="brand.200"
                onClick={() => foodCtx.changePage("minus")}
              >
                <IoArrowBack /> &nbsp; Page {curPage - 1}
              </Button>
            )}
            <Spacer />
            {!lastPageBool && (
              <Button
                borderRadius="3xl"
                color="brand.200"
                onClick={() => foodCtx.changePage("add")}
              >
                Page {curPage + 1} &nbsp; <IoArrowForward />
              </Button>
            )}
          </Fragment>
        )}
      </Flex>
    </Box>
  );
}

// const markup = () => {
//   if (curPage === totalPages && totalPages === 1) return null;
//   if (curPage === 1 && totalPages > 1)
//     return (
//       <Fragment>
//         <Spacer />
//         <Button borderRadius="3xl" color="brand.200">
//           Page {curPage + 1} &nbsp; <IoArrowForward />
//         </Button>
//       </Fragment>
//     );
//   if (curPage > 1 && curPage < totalPages)
//     return (
//       <Fragment>
//         <Button borderRadius="3xl" color="brand.200">
//           <IoArrowBack /> &nbsp; Page {curPage - 1}
//         </Button>
//         <Spacer />
//         <Button borderRadius="3xl" color="brand.200">
//           Page {curPage + 1} &nbsp; <IoArrowForward />
//         </Button>
//       </Fragment>
//     );

//   if (curPage === totalPages && totalPages > 1)
//     return (
//       <Button borderRadius="3xl" color="brand.200">
//         <IoArrowBack /> &nbsp; Page {curPage - 1}
//       </Button>
//     );
// };
