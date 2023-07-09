const animateTopBar = (offsetTop: number) => {
    const topbarTop = document.querySelector(".innertopbar_top") as HTMLElement;
    const topbarMiddle = document.querySelector(".innertopbar_middle") as HTMLElement;
    const topbarBorder = document.querySelector(".topbar_border") as HTMLElement;
    const topbarBottom = document.querySelector(".innertopbar_bottom") as HTMLElement;
    if (offsetTop >= 40) {
        topbarTop.style.overflow = "hidden"
        topbarTop.className = "innertopbar_top top_compact"
        topbarMiddle.className = "innertopbar_middle middle_compact"
        topbarBorder.className = "topbar_border border_compact"
        topbarBottom.className = "innertopbar_bottom bottom_compact"
    } else {
        topbarTop.style.overflow = "visible"
        topbarTop.className = "innertopbar_top"
        topbarMiddle.className = "innertopbar_middle"
        topbarBorder.className = "topbar_border"
        topbarBottom.className = "innertopbar_bottom"
    }
}

const animateBanner = (offsetTop: number) => {
    const sizeIndex = window.innerWidth > 1060 ? 0 : (window.innerWidth > 600 ? 1 : 2)
    const headingTranslateX = [-23, -16, -12]
    const textSize = [90, 60, 40]
    const maxScaleFactor = 110;
    const video = document.querySelector(".banner_video") as HTMLVideoElement
    const heading = document.querySelector(".banner_heading") as HTMLElement
    const text = document.querySelector(".banner_text") as HTMLElement
    const scaleFactor = Math.max(Math.min(offsetTop / 10, maxScaleFactor), 0)
    if (scaleFactor === maxScaleFactor) {
        video.style.display = "block"
        heading.style.display = "none"

        const videoTime = Math.max(Math.min((offsetTop - 1100) / 700, video.duration), 0)

        if (videoTime >= 0.4) {
            text.style.display = "block"
            text.style.opacity = `${videoTime <= 0.95 ? (0.5 + 0.5 * ((videoTime - 0.4) / 0.55)) : (1 - 1 * ((videoTime - 0.95) / 0.55))}`
            text.style.fontSize = `${textSize[sizeIndex] + (15 * ((videoTime - 0.4) / 1.5))}px`
        }

        video.currentTime = videoTime

    } else {
        heading.style.display = "block"
        video.style.display = "none"
        text.style.display = "none"

        const rgbNumber = 211 - 211 * (Math.min(offsetTop, 150) / 150)
        heading.style.transform = `scale(${Math.max(scaleFactor, 1)}) translate(${headingTranslateX[sizeIndex]}px, -2px)`
        heading.style.color = `rgb(${rgbNumber}, ${rgbNumber}, ${rgbNumber})`
    }
    const parallax = document.querySelector("#parallax") as HTMLElement;
    parallax.style.transform = `translateY(${-Math.max(Math.min((offsetTop - 880 * 5), 880), 0)}px)`
}

const animateDescription = () => {
    const description = document.querySelector(".description") as HTMLElement;
    const animatePoint = window.innerHeight - description.getBoundingClientRect().y;
    if (animatePoint > 0) {
        description.style.opacity = `${Math.min((animatePoint) / 500, 1)}`
    }
}

const animateDesign = () => {
    animateVideo(".design_video>video")
    animateVideo(".design_video:nth-of-type(3)>video")
}

const animatePerformance = () => {
    animateVideo(".performance_video>video")

    const banner = document.querySelector(".app_performance_front") as HTMLElement;
    const animatePoint = window.innerHeight - (banner.getBoundingClientRect().y + banner.clientHeight / 3);
    if (animatePoint >= 0) {
        banner.childNodes.forEach(node => {
            (node as HTMLElement).style.scale = "1.05"
        })
    }
}

const animateDisplay = () => {
    animateVideo(".display_video video")
}

const animateHeadings = () => {
    const headings = document.querySelectorAll(".headings");
    headings.forEach(heading => {
        const animatePoint = window.innerHeight - (heading.getBoundingClientRect().y + heading.clientHeight);

        if (animatePoint >= 0) {
            heading.childNodes.forEach(node => {
                (node as HTMLElement).style.top = "0";
                (node as HTMLElement).style.opacity = "1";
            })
        } else {
            heading.childNodes.forEach(node => {
                (node as HTMLElement).style.top = node.nodeName === "H4" ? "-5px" : "8px";
                (node as HTMLElement).style.opacity = "0";
            })
        }
    })
}

const animateVideo = (selector: string, scaleUp: boolean = true) => {
    const video = document.querySelector(selector) as HTMLVideoElement;
    const container = video.parentElement as HTMLElement;
    if (container.style.opacity === "0") return;

    if (video) {
        const animatePoint2 = window.innerHeight - video.getBoundingClientRect().y;
        //Video có tỉ lệ width/height là 1.94
        const expectedHeight = (window.innerWidth * 0.9) / 1.94
        if (animatePoint2 < 0) {
            video.currentTime = 0
        }
        if (animatePoint2 >= 0) {
            if (video.paused && video.currentTime === 0) {
                video.play()
            }
            if (scaleUp) {
                video.style.width = `${50 + (40 * (Math.min(animatePoint2 / expectedHeight, 1)))}vw`
            }
        }
    }
}

const animateConnectivity = () => {
    const container = document.querySelector(".connectivity_detail") as HTMLElement;
    const animatePoint = window.innerHeight - (container?.getBoundingClientRect().y + container.clientHeight / 2)
    if (animatePoint >= 0) {
        const img1 = container.childNodes[2] as HTMLElement
        const img2 = container.childNodes[3] as HTMLElement
        if (img1.style.left !== "0px") {
            const factor = Math.min(animatePoint / (window.innerHeight * 0.4), 1)
            img1.style.left = `${-400 + 400 * factor}px`
            img2.style.right = `${-500 + 500 * factor}px`
            if (factor === 1) {
                container.querySelectorAll("div").forEach(div => div.style.display = "flex")
            }
        }
    }
}

const attachEvent = () => {
    const container = document.querySelector(".content") as HTMLElement;
    container.addEventListener("scroll", e => {
        const offsetTop = (e.target as HTMLElement).scrollTop
        animateTopBar(offsetTop)
        animateBanner(offsetTop)
        animateDescription()
        animateDesign()
        animatePerformance()
        animateDisplay()
        animateHeadings()
        animateConnectivity()
    })
}

export default attachEvent