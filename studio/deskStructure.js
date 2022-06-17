import S from '@sanity/desk-tool/structure-builder'
import {
  BsGear,
  IoAppsOutline,
  BsBook,
  AiOutlineHome,
  AiOutlineUser,
  IoNewspaperOutline,
} from 'react-icons/all'

// We filter document types defined in structure to prevent them from being listed twice
const hiddenDocTypes = (listItem) =>
  !['site-config', 'home-page', 'category', 'author', 'post'].includes(listItem.getId())

export default () =>
  S.list()
    .title('Site')
    .items([
      S.listItem()
        .title('Site config')
        .icon(BsGear)
        .child(S.editor().id('config').schemaType('site-config').documentId('global-config')),
      S.listItem()
        .title('Categories')
        .icon(IoAppsOutline)
        .schemaType('category')
        .child(S.documentTypeList('category').title('Category')),
      S.listItem()
        .title('Authors')
        .icon(AiOutlineUser)
        .schemaType('author')
        .child(S.documentTypeList('author').title('Author')),
      S.listItem()
        .title('Posts')
        .icon(IoNewspaperOutline)
        .schemaType('post')
        .child(S.documentTypeList('post').title('Post')),
      S.listItem()
        .title('Pages')
        .icon(BsBook)
        .child(
          S.list()
            .title('Site pages')
            .items([
              S.listItem()
                .title('Home page')
                .icon(AiOutlineHome)
                .child(S.document().schemaType('home-page').documentId('home-page')),
            ])
        ),
      ...S.documentTypeListItems().filter(hiddenDocTypes),
    ])
