import { style } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  listCards = [
    { name: 'Rendang', about: 'Rendang dihasilkan dari proses memasak suhu rendah dalam waktu lama dengan menggunakan aneka rempah-rempah dan santan.', place: 'Padang, Indonesia', imageurl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTB_GPSEkNRRSv1VNOrNWbBgvytZQo7npR5SIHotQyq&s'},
    { name: 'Gudeg', about: 'Gudeg adalah hidangan khas Provinsi Yogyakarta dan Jawa Tengah yang terbuat dari nangka muda yang dimasak dengan santan. Perlu waktu berjam-jam untuk membuat hidangan ini. Warna coklat biasanya dihasilkan oleh daun jati yang dimasak bersamaan. ', place: 'Yogyakarta, Indonesia', imageurl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTfl3RizB44jQidOC18T6LKfwZUg-oWW6V_Q&usqp=CAU'},
    { name: 'Coto makassar', about: 'Coto makassar atau coto mangkasara adalah makanan tradisional Suku Bugis dan Suku Makassar, Sulawesi Selatan. Makanan ini terbuat dari jeroan sapi yang direbus dalam waktu yang lama. Rebusan jeroan bercampur daging sapi ini kemudian diiris-iris lalu dibumbui dengan bumbu yang diracik secara khusus.', place: 'Makassar, Indonesia', imageurl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5SkivgM50UvT9nDjLCWZaamwU_mIzMCLtUA&usqp=CAU'},
    { name: 'Mi aceh', about: 'Mi aceh adalah masakan mi pedas khas Aceh di Indonesia. Mie kuning tebal dengan irisan daging sapi, daging kambing atau makanan laut disajikan dalam sup sejenis kari yang gurih dan pedas. Mi aceh biasanya ditaburi dengan bawang goreng dan disajikan bersama emping, potongan bawang merah, mentimun, dan jeruk nipis.', place: 'Aceh, Indonesia', imageurl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqxqoLdU0V_RLY-InYSE1hJdR3hoY_cMOHqQ&usqp=CAU'}
  ]

  constructor() { 
  }

    ngOnInit(): void {
  }
}
