import {useEffect, useRef, useState} from "react";
import UseHorizontalSliderProps from "./interfaces";
import {ListItem} from "../interfaces";

const useHorizontalSlider = ({
  list,
  isMultySelection,
  ...props
}: UseHorizontalSliderProps) => {
  const [listOfData, setlistOfData] = useState<ListItem[]>([...list]);
  const [selectedItemsIndexs, setSelectedItemsIndexs] = useState([]);
  const [viewHeight, setViewHeight] = useState(0);
  const scrollRef = useRef(null);

  useEffect(() => {
    if (listOfData?.length > 0 && !isMultySelection) {
      onSelectItem(listOfData[0]);
    }
  }, [JSON.stringify(listOfData.length)]);

  const onDeleteItemFromList = (itemToDelete: ListItem) => {
    const listSelectedWithoutItemIndex = selectedItemsIndexs.filter(
      (index) => index !== itemToDelete.index
    );
    const listDataWithoutItemIndex = listOfData.filter(
      (item) => item.index !== itemToDelete.index
    );

    setSelectedItemsIndexs([...listSelectedWithoutItemIndex]);
    setlistOfData([...listDataWithoutItemIndex]);
  };

  const onSelectItem = (item: ListItem) => {
    let indexInList = listOfData.findIndex(
      (itemData) => itemData.index === item.index
    );

    if (isMultySelection) {
      if (!selectedItemsIndexs.includes(item.index)) {
        setSelectedItemsIndexs([...selectedItemsIndexs, item.index]);
      } else {
        const listWithoutItemIndex = selectedItemsIndexs.filter(
          (index) => index !== item.index
        );
        setSelectedItemsIndexs([...listWithoutItemIndex]);
      }
    } else {
      setSelectedItemsIndexs([item.index]);
    }

    const x = indexInList * 100;
    scrollRef?.current?.scrollToIndex({index: indexInList, animated: true});
  };
  return {
    listOfData,
    onSelectItem,
    scrollRef,
    selectedItemsIndexs,
    onDeleteItemFromList,
    viewHeight,
    setViewHeight,
  };
};

export default useHorizontalSlider;
