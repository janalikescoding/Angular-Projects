import { Directive, ElementRef, HostBinding, HostListener } from "@angular/core";

@Directive({
    selector:'[appDropdown]'
})
export class DropdownDirective {
    @HostBinding('class.open')open: boolean = false;
    


    @HostListener('click') toggleOpen(eventData: Event){
        this.open = !this.open;
    }

    // @HostListener('document:click', ['$event']) toggleOpen(event: Event) {
    //     this.isOpen = this.elRef.nativeElement.contains(event.target) ? !this.isOpen : false;
    //   }
    //   constructor(private elRef: ElementRef) {}
}