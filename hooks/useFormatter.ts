export const useFormatter = () => ({
   formatPrice: (price: number) => {
      return price.toLocaleString("en-US", {
         minimumFractionDigits: 2,
         style: "currency",
         currency: "USD",
      });
   },

   formatDate: (date: string) => {
      const dateFormatted = new Date(date);
      return new Intl.DateTimeFormat("pt-BR").format(dateFormatted);
   },
});
