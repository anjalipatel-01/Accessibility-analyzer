import { Copyright, CircleUserRound, Linkedin, Github, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer>
      <p className="Contactus">
        Contact us <CircleUserRound size={15} /> <br />
        <Copyright size={14} /> Copyright 2025, AccessGuard Incorporation, All rights reserved
      </p>
      <p>
        <Linkedin size={14} />&nbsp;
        <Github size={14} />&nbsp;
        <Twitter size={14} />
      </p>
    </footer>
  );
}
