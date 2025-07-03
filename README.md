# cURL-shells
A simple and fast way to grab reverse shells for any operating system—straight from the terminal.

## How to Use:

To fetch a reverse shell payload, just use:

```bash
curl curl-shells.com -A "<platform>"
```

Replace `<platform>` with one of the following options:
- `Windows`
- `Linux`
- `Mac`
- `Py` (Python)
- `PHP`
- `Help` (shows all available options)

Example:
```bash
curl curl-shells.com -A "Linux"
```

You can also specify your listener IP for automatic injection using the `-H` flag:

```bash
curl curl-shells.com -A "Linux" -H "IP:10.10.10.10"
```

This will auto-replace any `<LHOST>` placeholders in the shell with your custom IP—ready to copy and paste.

---

**Important Note:** Always start your listener first with:

```bash
nc -lnvp 4444
```

Thanks for using **curl-shells**!


Thank you to [revshells.com](https://revshells.com) and [pentestmonkey.net](https://pentestmonkey.net) for the reverse shells in this project!
