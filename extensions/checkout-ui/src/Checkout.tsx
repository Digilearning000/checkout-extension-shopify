import {
  Banner,
  useApi,
  useTranslate,
  reactExtension,
} from "@shopify/ui-extensions-react/checkout";

export default reactExtension(
  "purchase.checkout.cart-line-list.render-after",
  () => <Extension />
);

function Extension() {
  const translate = useTranslate();
  const { extension } = useApi();

  return (
    <Banner title="checkout-ui">
      Milan checkout
      {/* {translate("welcome", { target: extension.target })} */}
    </Banner>
  );
}
