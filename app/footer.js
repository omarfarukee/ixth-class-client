/* eslint-disable @next/next/no-img-element */
import React from 'react'
export default function Footer() {
    return (
        <footer className="flex p-10 footer bg-base-200 text-base-content justify-evenly">
            <aside>
                <img src='https://scontent.fdac5-1.fna.fbcdn.net/v/t1.15752-9/428425252_423680740096164_4514252536291792824_n.png?_nc_cat=110&ccb=1-7&_nc_sid=8cd0a2&_nc_ohc=ii0A0dVD90oAX_QU5cS&_nc_ht=scontent.fdac5-1.fna&oh=03_AdSfHk5i3gr4mgAzvFsQIJK1YnksZUIy7ecmZ_RJAWiFJQ&oe=65F981B2' alt=''/>
                <p>ACME Industries Ltd.<br />Providing reliable tech since 1992</p>
            </aside>
            <nav>
                <h6 className="footer-title">Services</h6>
                <a className="link link-hover">Branding</a>
                <a className="link link-hover">Design</a>
                <a className="link link-hover">Marketing</a>
                <a className="link link-hover">Advertisement</a>
            </nav>
            <nav>
                <h6 className="footer-title">Company</h6>
                <a className="link link-hover">About us</a>
                <a className="link link-hover">Contact</a>
                <a className="link link-hover">Jobs</a>
                <a className="link link-hover">Press kit</a>
            </nav>
            <nav>
                <h6 className="footer-title">Legal</h6>
                <a className="link link-hover">Terms of use</a>
                <a className="link link-hover">Privacy policy</a>
                <a className="link link-hover">Cookie policy</a>
            </nav>
        </footer>
    )
}
