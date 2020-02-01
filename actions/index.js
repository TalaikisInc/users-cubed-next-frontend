import { NotFound } from 'proto/responses/notFound'
import { UserCreate } from 'proto/responses/userCreate'
import { UserEdit } from 'proto/responses/userEdit'
import { UserDestroy } from 'proto/responses/userDestroy'
import { Confirm } from 'proto/responses/confirm'
import { ConfirmPhone } from 'proto/responses/confirmPhone'
import { ContactUs } from 'proto/responses/contactUs'
import { Refer } from 'proto/responses/refer'
import { ReferRegister } from 'proto/responses/referRegister'
import { ReferUse } from 'proto/responses/referUse'
import { ResetCreate } from 'proto/responses/resetCreate'
import { TokenCreate } from 'proto/responses/tokenCreate'
import { TokenDestroy } from 'proto/responses/tokenDestroy'
import { TokenExtend } from 'proto/responses/tokenExtend'
import { TokenGet } from 'proto/responses/tokenGet'
import { UserCreateSocial } from 'proto/responses/userCreateSocial'
import { UserGet } from 'proto/responses/userGet'

export const protoMap = {
  CONFIRM: Confirm,
  RESET_CREATE: ResetCreate,
  USER_CREATE: UserCreate,
  USER_CREATE_SOCIAL: UserCreateSocial,
  USER_EDIT: UserEdit,
  USER_DESTROY: UserDestroy,
  USER_GET: UserGet,
  USER_CONFIRM_PHONE: ConfirmPhone,
  SET_ROLE: 'SetRole',
  TOKEN_CREATE: TokenCreate,
  TOKEN_EXTEND: TokenExtend,
  TOKEN_DESTROY: TokenDestroy,
  TOKEN_GET: TokenGet,
  REFER_REFER: Refer,
  REFER_USE: ReferUse,
  REFER_REGISTER: ReferRegister,
  PRODUCTS_GET: 'ProductsGet',
  PRODUCT_GET_BYID: 'ProductGetById',
  CART_ADD: 'CartAdd',
  CART_REMOVE: 'CartRemove',
  WISHLIST_ADD: 'WishlistAdd',
  WISHLIST_REMOVE: 'WishlistRemove',
  WISHLIST_GET: 'WishlistGet',
  CHECKOUT: 'Checkout',
  BLOG_ARTICLES_GET: 'BlogArticlesGet',
  BLOG_ARTICLE_GET_BYTITLE: 'BlogArticlesGetByTitle',
  BLOG_ARTICLE_GET_BYCATEGORY: 'BlogArticlesGetByCategory',
  BLOG_ARTICLE_ADD: 'BlogArticleAdd',
  BLOG_ARTICLE_EDIT: 'BlogArticleEdit',
  BLOG_ARTICLE_DELETE: 'BlogArticleDelete',
  BLOG_CATEGORY_ADD: 'BlogCategoryAdd',
  BLOG_CATEGORY_EDIT: 'BlogCategoryEdit',
  BLOG_CATEGORY_DELETE: 'BlogCategoryDelete',
  BLOG_CATEGORIES_GE: 'BlogCategoriesGet',
  UPLOAD: 'Upload',
  CONTACT_US: ContactUs,
  MODULE_CREATE: 'ModuleCreate',
  MODULE_MIGRATE: 'ModuleMigrate',
  NOTIFY: 'Notify',
  NOTIFY_SUBSCRIBE: 'NotifySubscribe',
  NOT_FOUND: NotFound
}
