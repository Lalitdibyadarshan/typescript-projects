export class CustomMap {
    private googleMap: google.maps.Map;
    constructor(divId: string) {
        this.googleMap = new google.maps.Map(document.getElementById(divId), {
            zoom: 1,
            center: {
                lat: 0,
                lng: 0
            }
        });
    }

    addMarker(mappable: MappableInterface) {
        console.log(mappable.iconUrl)
        new google.maps.Marker({
            map: this.googleMap,
            position: mappable.location,
            title: mappable.title,
            icon: {
                url: mappable.iconUrl
            }
        }) 
    }
}