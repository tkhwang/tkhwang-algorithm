# Chap11. 리눅스 취약점 악용의 다음 단계

## 정식 사용

`call print` 시에 stack 에 argument passing

- @esp : format string
- @esp+4 : value

```c
main()
{
   printf("This is a %s\n", "test");
}
```


```
$eflags: [carry parity adjust zero SIGN trap INTERRUPT direction overflow resume virtualx86 identification]
──────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────[ stack ]────
0xffffc9d0│+0x00: 0x080484d5  →  "This is a %s"  ← $esp
0xffffc9d4│+0x04: 0x080484d0  →  "test"
0xffffc9d8│+0x08: 0x0804844b  →  <__libc_csu_init+11> add ebx, 0x1bb5
0xffffc9dc│+0x0c: 0xf7fbb000  →  0x1a8da8
0xffffc9e0│+0x10: 0x08048440  →  <__libc_csu_init+0> push ebp
0xffffc9e4│+0x14: 0x00
0xffffc9e8│+0x18: 0x00   ← $ebp
0xffffc9ec│+0x1c: 0xf7e2bad3  →  <__libc_start_main+243> mov DWORD PTR [esp], eax
──────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────[ code:i386 ]────   0x804841e  <main+1>  mov ebp, esp
   0x8048420  <main+3>  and esp, 0xfffffff0
   0x8048423  <main+6>  sub esp, 0x10
   0x8048426  <main+9>  mov DWORD PTR [esp+0x4], 0x80484d0
   0x804842e  <main+17>  mov DWORD PTR [esp], 0x80484d5
 → 0x8048435  <main+24>  call 0x80482f0 <printf@plt>
```


### Missing parameter : variable 

- format string 변수는 제대로 설정
- 하지만 variable missing 한 경우 

```c
main()
{
   printf("This is a %s.\n");
}
```

Stack에 있는 값을 variable 로 간주.

```
0xffffc9c0│+0x00: 0x080484d0  →  "This is a %s."         ← $esp
0xffffc9c4│+0x04: 0xf7ffd000  →  0x020f30
0xffffc9c8│+0x08: 0x0804844b  →  <__libc_csu_init+11> add ebx, 0x1bb5
0xffffc9cc│+0x0c: 0xf7fbb000  →  0x1a8da8
0xffffc9d0│+0x10: 0x08048440  →  <__libc_csu_init+0> push ebp
0xffffc9d4│+0x14: 0x00
0xffffc9d8│+0x18: 0x00   ← $ebp
0xffffc9dc│+0x1c: 0xf7e2bad3  →  <__libc_start_main+243> mov DWORD PTR [esp], eax
──────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────[ code:i386 ]────
   0x804841c  <frame_dummy+44>  call DWORD PTR [ebp-0x77]
   0x804841f  <main+2>  in eax, 0x83
   0x8048421  <main+4>  in al, 0xf0
   0x8048423  <main+6>  sub esp, 0x10
   0x8048426  <main+9>  mov DWORD PTR [esp], 0x80484d0
 → 0x804842d  <main+16>  call 0x80482f0 <printf@plt>
```


## 1.2 실습 11-1 : 임의의 메모리 읽기

```c
#include <stdlib.h>

int main(int argc, char *argv[])
{
  static int canary = 0;
  char temp[2048];

  strcpy(temp, argv[1]);
  printf(temp);
  printf("\n");
  printf("Canary at 0x%08x = 0x%08x\n", &canary, canary);
}
```


## DPA(Direct Parameter Access) 직접 파라미터 접근

- Stack 을 통하여 argument passing 을 동일하게 형성됨.
- `printf` 함수 내부에서 안에서 `$` detect 하여 *n번째* argument passing 되는 듯.

```c
main()
{
  printf("This is a %3$s.\n", 1, 2, "test");
}
```

```
0xffffc9b0│+0x00: 0x080484e5  →  "This is a %3$s."       ← $esp
0xffffc9b4│+0x04: 0x01
0xffffc9b8│+0x08: 0x02
0xffffc9bc│+0x0c: 0x080484e0  →  "test"
0xffffc9c0│+0x10: 0x08048450  →  <__libc_csu_init+0> push ebp
0xffffc9c4│+0x14: 0x00
0xffffc9c8│+0x18: 0x00   ← $ebp
0xffffc9cc│+0x1c: 0xf7e2bad3  →  <__libc_start_main+243> mov DWORD PTR [esp], eax
──────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────[ code:i386 ]────
   0x8048422  <main+5>  lock sub esp, 0x10
   0x8048426  <main+9>  mov DWORD PTR [esp+0xc], 0x80484e0
   0x804842e  <main+17>  mov DWORD PTR [esp+0x8], 0x2
   0x8048436  <main+25>  mov DWORD PTR [esp+0x4], 0x1
   0x804843e  <main+33>  mov DWORD PTR [esp], 0x80484e5
 → 0x8048445  <main+40>  call 0x80482f0 <printf@plt>
 ```







