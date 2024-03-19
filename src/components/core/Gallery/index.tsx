import LightGallery from "lightgallery/react"
import lgThumbnail from "lightgallery/plugins/thumbnail"
import lgZoom from "lightgallery/plugins/zoom"

interface GalleryProps {
	images: {
		url: string
		title: string
	}[]
}

export const Gallery = ({ images }: GalleryProps) => {
	return (
		images && (
			<div className="w-full">
				<LightGallery
					speed={500}
					plugins={[lgThumbnail, lgZoom]}
					download={false}
					elementClassNames="grid grid-cols-6 gap-4"
				>
					{images.map(({ url, title }) => (
						<a
							href={url}
							key={url}
							className="col-span-3 aspect-[3/2] overflow-hidden rounded-2xl transition-opacity hover:opacity-75 md:col-span-2"
						>
							<img alt={title} src={url} className="h-full w-full object-cover" />
						</a>
					))}
				</LightGallery>
			</div>
		)
	)
}
