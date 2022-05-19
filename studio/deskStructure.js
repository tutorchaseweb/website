import S from "@sanity/desk-tool/structure-builder";
import { BsGear, AiOutlineNotification } from "react-icons/all";

// We filter document types defined in structure to prevent them from being listed twice
const hiddenDocTypes = (listItem) =>
  !["site-config", "blog"].includes(listItem.getId());

export default () =>
  S.list()
    .title("Site")
    .items([
      S.listItem()
        .title("Site config")
        .icon(BsGear)
        .child(
          S.editor()
            .id("config")
            .schemaType("site-config")
            .documentId("global-config")
        ),
      S.listItem()
        .title("Blog")
        .schemaType("blog")
        .child(S.documentTypeList("blog").title("Blog")),
      ...S.documentTypeListItems().filter(hiddenDocTypes),
    ]);
