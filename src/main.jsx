import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import { Menu, X, ArrowRight, MapPin, Phone, Mail, CalendarDays, Users, ChevronDown } from 'lucide-react';
import './styles.css';

const rooms = [
  { title: 'Deluxe Double or Twin Room with Balcony', price: '3,355', img: 'https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=1000&q=85', details: '3 Guests · 1 twin bed + 1 full bed', tags: ['Balcony', 'View', 'Breakfast Included'] },
  { title: 'Double Room', price: '2,852', img: 'https://images.unsplash.com/photo-1611892440504-42a792e24d32?auto=format&fit=crop&w=1000&q=85', details: '2 Guests · 1 King Bed · 17 m²', tags: ['Balcony', 'Mountain view', 'Breakfast optional'] },
  { title: 'Deluxe Triple Room', price: '3,355', img: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1000&q=85', details: '3 Guests · 3 Beds', tags: ['Breakfast Included', 'Spacious', 'Comfortable'] }
];
const activities = [
  ['Paragliding','https://images.unsplash.com/photo-1521336575822-6da63fb45455?auto=format&fit=crop&w=1000&q=80'],
  ['Phewa Lake','https://images.unsplash.com/photo-1605649487212-47bdab064df7?auto=format&fit=crop&w=1000&q=80'],
  ['Sarangkot Sunrise','https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1000&q=80'],
  ['World Peace Pagoda','https://images.unsplash.com/photo-1589308078059-be1415eab4c3?auto=format&fit=crop&w=1000&q=80']
];

function App(){
 const [open,setOpen]=useState(false); const [booking,setBooking]=useState(false);
 const nav=(id)=>{document.getElementById(id)?.scrollIntoView({behavior:'smooth'});setOpen(false)};
 return <>
  <header className="nav"><div className="nav-inner"><div className="brand" onClick={()=>nav('home')}><span>ROYAL GARDEN</span><small>RESORT · POKHARA</small></div>
   <button className="mobile" onClick={()=>setOpen(!open)}>{open?<X/>:<Menu/>}</button>
   <nav className={open?'links show':'links'}><button onClick={()=>nav('home')}>Home</button><button onClick={()=>nav('rooms')}>Rooms</button><button onClick={()=>nav('experience')}>Experience</button><button onClick={()=>nav('about')}>About</button><button onClick={()=>nav('contact')}>Contact</button><button className="nav-book" onClick={()=>setBooking(true)}>Book Your Stay</button></nav>
  </div></header>
  <main id="home">
   <section className="hero"><div className="hero-overlay"></div><div className="hero-content"><p className="eyebrow">WELCOME TO POKHARA</p><h1>Luxury in the<br/><em>Lap of Nature</em></h1><p className="hero-copy">A peaceful retreat surrounded by greenery, comfort and the beauty of the Himalayas.</p><button className="primary" onClick={()=>setBooking(true)}>Book Your Stay <ArrowRight size={17}/></button></div><div className="scroll">SCROLL TO EXPLORE <ChevronDown size={17}/></div></section>
   <section className="intro" id="about"><div><p className="eyebrow">WELCOME</p><h2>Comfort, nature &<br/><em>warm hospitality.</em></h2></div><div className="intro-text"><p>Royal Garden Resort is a peaceful destination offering comfortable accommodation, excellent dining, beautiful gardens and modern facilities in Pokhara.</p><p>Whether you are travelling with family, planning a business trip or celebrating a special occasion, our team is here to make your stay relaxing and memorable.</p><button className="text-link" onClick={()=>nav('contact')}>Discover the resort <ArrowRight size={16}/></button></div></section>
   <section className="rooms" id="rooms"><div className="section-head"><div><p className="eyebrow">ACCOMMODATIONS</p><h2>Explore Our <em>Rooms</em></h2></div><button className="outline" onClick={()=>setBooking(true)}>Check Availability</button></div><div className="room-grid">{rooms.map(r=><article className="room" key={r.title}><img src={r.img}/><div className="room-body"><p className="room-price">FROM <strong>NPR {r.price}</strong> / NIGHT</p><h3>{r.title}</h3><p>{r.details}</p><div className="tags">{r.tags.map(t=><span key={t}>{t}</span>)}</div><button className="text-link" onClick={()=>setBooking(true)}>View room <ArrowRight size={15}/></button></div></article>)}</div></section>
   <section className="feature"><div className="feature-image"></div><div className="feature-copy"><p className="eyebrow">A SANCTUARY BY THE LAKE</p><h2>Stay close to<br/><em>Pokhara's beauty.</em></h2><p>Located in Lakeside, our resort gives you easy access to Phewa Lake and Pokhara's most loved attractions while keeping you surrounded by a peaceful garden atmosphere.</p><div className="stats"><div><b>01</b><span>PEACEFUL<br/>LOCATION</span></div><div><b>24/7</b><span>GUEST<br/>SUPPORT</span></div><div><b>100%</b><span>WARM<br/>HOSPITALITY</span></div></div></div></section>
   <section className="experience" id="experience"><div className="section-head center"><div><p className="eyebrow">WHAT WE OFFER</p><h2>Tours & <em>Activities</em></h2><p>Discover Pokhara and beyond through unforgettable experiences.</p></div></div><div className="activity-grid">{activities.map(([name,img],i)=><div className="activity" key={name}><img src={img}/><div><span>0{i+1}</span><h3>{name}</h3><p>Explore, experience and create lasting memories.</p></div></div>)}</div></section>
   <section className="quote"><div><p className="eyebrow">GUEST VOICES</p><blockquote>“A calm and comfortable place with a beautiful garden, helpful staff and a genuinely relaxing atmosphere.”</blockquote><p className="author">— OUR GUESTS</p></div></section>
   <section className="contact" id="contact"><div className="contact-card"><p className="eyebrow">FIND US</p><h2>Your stay in<br/><em>Pokhara starts here.</em></h2><div className="contact-list"><p><MapPin/> Street No. 13, Lakeside, Pokhara, Nepal</p><p><Phone/> +977 061552777 · +977 9856167777</p><p><Mail/> info@royalgardenresort.com.np</p></div><button className="primary" onClick={()=>setBooking(true)}>Check Availability <ArrowRight size={17}/></button></div><div className="map"><iframe title="Royal Garden Resort location" src="https://www.google.com/maps?q=Royal%20Garden%20Resort%20Pokhara&output=embed"></iframe></div></section>
  </main>
  <footer><div className="brand"><span>ROYAL GARDEN</span><small>RESORT · POKHARA</small></div><p>Luxury in the Lap of Nature</p><p>© 2026 Royal Garden Resort. Frontend concept.</p></footer>
  {booking&&<div className="modal" onClick={()=>setBooking(false)}><div className="booking" onClick={e=>e.stopPropagation()}><button className="close" onClick={()=>setBooking(false)}><X/></button><p className="eyebrow">RESERVATIONS</p><h2>Book Your <em>Stay</em></h2><div className="form-grid"><label>Check in<input type="date"/></label><label>Check out<input type="date"/></label><label>Guests<div className="fake"><Users size={17}/> 2 Adults</div></label><label>Rooms<div className="fake"><CalendarDays size={17}/> 1 Room</div></label></div><button className="primary wide" onClick={()=>alert('Frontend demo: connect this form to your backend/booking API next.')}>Check Availability <ArrowRight size={17}/></button></div></div>}
 </>
}
createRoot(document.getElementById('root')).render(<App/>);
