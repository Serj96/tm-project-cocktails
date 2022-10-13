export function sorryContent() {
  return `<h2 class="sorry__title">Sorry, we didn't find any cocktail for you</h2><picture class="">
            <source srcset="./img/pictures/mobile/empty_page_280x308.png 1x, ./img/pictures/mobile/empty_page_560x617@2x.png 2x"
                media="(max-width: 767.99px)" />
            <source srcset="./img/pictures/tablet/empty_page_345x381.png 1x, ./img/pictures/tablet/empty_page_690x762@2x.png 2x"
                media="(max-width: 1279.99px)" />
            <source
                srcset="./img/pictures/desktop/empty_page_345x380.png 1x, ./img/pictures/desktop/empty_page_690x760@2x.png 2x" />
            <img  src="./img/pictures/mobile/empty_page_280x308.png alt="no cocktail">
        </picture>`;
}
