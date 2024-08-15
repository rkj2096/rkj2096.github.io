---
layout: post
title: Chroot System Call
image: 'https://picsum.photos/500/300'
category: OS
---
A chroot (change root) is a Unix system call that changes the apparent root directory for a process and its children. It creates an isolated environment, often used for testing, development, or containing potentially untrusted programs.

``` c
#include <unistd.h>
#include <stdio.h>
#include <stdlib.h>

int main(int argc, char *argv[]) {
    // Change root directory
    if (chroot("/isolate-dir") != 0) {
        perror("chroot");
        exit(EXIT_FAILURE);
    }

    // Change to the new root directory
    if (chdir("/") != 0) {
        perror("chdir");
        exit(EXIT_FAILURE);
    }

    // Execute a new shell
    char *shell = "/bin/bash";
    char *args[] = {shell, NULL};
    
    execvp(shell, args);

    // If execvp returns, an error occurred
    perror("execvp");
    exit(EXIT_FAILURE);
}
```

# How it works ?
The chroot system call is implemented in the Linux kernel source code in the file `fs/open.c`.
The `struct fs_struct` is a data structure in the Linux kernel that holds the filesystem-related context of a process. This includes information such as the current working directory, the root directory, and the umask. Each process in the kernel has a pointer to an fs_struct, which encapsulates this context. The chroot syscall bsically update the root directory of the process by change this fs_struct inside task_struct.

```c
struct fs_struct {
    spinlock_t lock;             // Protects the structure
    int users;                   // Reference count
    seqcount_t seq;              // Sequence counter for path walking
    struct path root;            // Root directory
    struct path pwd;             // Current working directory
    umode_t umask;               // File creation mode mask
};

struct task_struct {
    // Process state
    volatile long state;          // Current state of the process (running, sleeping, etc.)
    void *stack;                  // Process kernel stack

    // Scheduling information
    pid_t pid;                    // Process ID
    pid_t tgid;                   // Thread group ID
    struct task_struct *parent;   // Pointer to the parent process
    struct list_head children;    // List of child processes
    struct list_head sibling;     // List of sibling processes
    struct list_head tasks;       // List of all processes

    // Memory management
    struct mm_struct *mm;         // Address space of this process
    struct mm_struct *active_mm;  // Active address space

    // File system
    struct fs_struct *fs;         // Filesystem information
    struct files_struct *files;   // Open file descriptors

    // Signal handling
    struct signal_struct *signal; // Shared signal handlers
    struct sighand_struct *sighand;// Signal handlers

    // Timers
    struct list_head cpu_timers[3]; // CPU-specific timers

    // Debugging
    unsigned int flags;           // Various flags (e.g., for debugging)
    unsigned int ptrace;          // Ptrace flags

    // More fields...
};

```